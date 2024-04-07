import { z } from 'zod';
import { buyerProcedure, createTRPCRouter, protectedProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';

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
      const { session } = ctx;
      const { cartId, updatedQuantity } = input;

      // const updateCartQuantity = await ctx.db.profile.update({
      //   where: {
      //     userId: session.user.id,
      //   },
      //   data: {
      //     cart: {
      //       update: {
      //         where: {
      //           id: cartId,
      //         },
      //         data: {
      //           quantity: updatedQuantity,
      //         },
      //       },
      //     },
      //   },
      // });
      // if (!updateCartQuantity)
      //   throw new TRPCError({ code: 'BAD_REQUEST', message: 'unable to update cart quantity' });
      // return updateCartQuantity;
      const updateCartQuantity = await ctx.db.cart.update({
        where: { id: cartId },
        data: {
          quantity: updatedQuantity,
        },
      });
      return updateCartQuantity;
    }),
});
