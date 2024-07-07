import { z } from 'zod';
import { buyerProcedure, createTRPCRouter, protectedProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import Stripe from 'stripe';
import { env } from '~/env';

const LineItem = z.object({
  name: z.string(),
  amount: z.number(),
  currency: z.string(),
  quantity: z.number(),
  orderId: z.string(),
  productId: z.array(z.string()),
});

export const buyerRouter = createTRPCRouter({
  addToCart: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        quantity: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { productId, quantity } = input;
      const { session } = ctx;

      //find product form modal and check product is available
      const product = await ctx.db.products.findUnique({ where: { id: productId } });
      if (!product) throw new TRPCError({ code: 'BAD_REQUEST', message: 'product not found' });

      //check stock and quantity if quantity exceeds throw error
      const stock = product?.stock;
      if (quantity > stock)
        throw new TRPCError({ code: 'PAYLOAD_TOO_LARGE', message: 'max quantity exceeded' });

      //add product to cart
      const addProductToCart = await ctx.db.cart.create({
        data: { productId, quantity, buyerId: session.user.id },
      });
      if (!addProductToCart)
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'Product not added to cart' });
      return addProductToCart;
    }),

  updateQuantity: buyerProcedure
    .input(z.object({ updatedQuantity: z.number(), cartId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { cartId, updatedQuantity } = input;
      const updateCartQuantity = await ctx.db.cart.update({
        where: { id: cartId },
        data: {
          quantity: updatedQuantity,
        },
      });
      return updateCartQuantity;
    }),

  deleteProductFromCart: buyerProcedure
    .input(z.object({ cartId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const deleteProduct = await ctx.db.cart.delete({ where: { id: input.cartId } });
      if (!deleteProduct)
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'unable to delete product from cart' });
      return deleteProduct;
    }),
  getCartProduct: buyerProcedure.query(async ({ ctx }) => {
    const { user } = ctx.session;
    const getBuyerCartItem = await ctx.db.cart.findMany({ where: { buyerId: user.id } });

    if (!getBuyerCartItem)
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'unable to get cart items' });
    // Todo: store buyer product id in array and make a query where delete all products that stock is 0

    // save buyer product ids in array to find product from product model
    const productIdArr = getBuyerCartItem.map((product) => product.productId);
    const buyerProduct = await ctx.db.products.findMany({ where: { id: { in: productIdArr } } });
    if (!buyerProduct)
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'unable to find buyer product' });
    const buyerCartWithProduct = getBuyerCartItem.map((cartItem) => {
      const product = buyerProduct.find((products) => products.id === cartItem.productId);
      return {
        ...cartItem,
        product,
      };
    });
    return buyerCartWithProduct;
  }),

  checkout: buyerProcedure.input(LineItem).mutation(async ({ ctx, input }) => {
    const { amount, currency, name, quantity, productId } = input;
    const buyerId = ctx.session?.user?.id;
    if (!buyerId) {
      throw new Error('User not authenticated');
    }

    // const createOrderId = await ctx.db.orderedProducts.create({
    //   data: {
    //     price: 123,
    //     quantity: 1,
    //     paymentMethod: 'card',
    //     productId: 'jasdhfjkl',
    //     sellerId: 'jsadfjkklj',
    //     userId: 'asjdkfjhlk',
    //     delivaryDate: new Date(),
    //     status: 'pending',
    //   },
    // });

    const stripe = new Stripe(env.STRIPE_SECRET_KEY);
    const payment = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: currency,
            unit_amount: amount,
            product_data: {
              name: name,
              description: 'Comfortable cotton t-shirt',
              images: ['https://example.com/t-shirt.png'],
            },
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/success/${orderId}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:3000',
      metadata: {
        cartId: 'cluyqd1nf0004o21z0gg6vkzj',
      },
    });
    return payment;
  }),

  orderStatus: buyerProcedure.input(z.string()).query(async ({ input }) => {
    const stripe = new Stripe(env.STRIPE_SECRET_KEY);
    const isPaid = await stripe.checkout.sessions.retrieve(input);
    return isPaid;
  }),

  getCart: buyerProcedure.query(async ({ ctx }) => {
    const getCart = await ctx.db.cart.findMany({
      where: {
        buyerId: ctx.session.user.id,
      },
    });
    if (!getCart) return [];
    return getCart;
  }),
});
