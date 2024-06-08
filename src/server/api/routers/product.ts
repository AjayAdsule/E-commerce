import { TRPCError } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';

export const productRouter = createTRPCRouter({
  getFilters: publicProcedure.query(async ({ ctx }) => {
    const getProduct = await ctx.db.products.findMany();

    if (!getProduct) throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' });
    const filter = {
      brand: getProduct?.map((products) => products?.productName),
      // category: getProduct?.map((products) => products.category),
      price: ['Rs 299 to Rs 499', 'Rs 499 to Rs 799', 'Rs 799 to Rs 999', 'Rs 999 to Rs 1299'],
      discount: ['10%', '20%', '30%', '40%', '50%', '60%', '70%'],
      // color: getProduct?.map((products) => products?.color),
    };

    return filter;
    ``;
  }),
  getProductByParams: publicProcedure
    .input(
      z.object({
        brand: z.array(z.string()),
        price: z.array(z.number()),
        color: z.array(z.string()),
      }),
    )
    .query(async ({ ctx, input }) => {
      console.log({ brand: input.brand.length, price: input.price.length });
      if (input.brand.length || input.price.length) {
        console.log('in');
        const getProduct = await ctx.db.products.findMany({
          where: {
            OR: [
              {
                productName: { in: input.brand },
              },
              {
                price: { in: input.price },
              },
              // {
              //   color: { in: input.color },
              // },
            ],
          },
        });
        if (!getProduct) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Product not found' });
        return getProduct;
      }

      const getProduct = await ctx.db.products.findMany();
      return getProduct;
    }),
  getUniqueProductByParams: publicProcedure
    .input(z.object({ params: z.string() }))
    .query(async ({ ctx, input }) => {
      const getProduct = await ctx.db.products.findUnique({
        where: {
          id: input.params,
        },
        include: {
          Images: true,
          sizes: true,
        },
      });
      if (!getProduct) throw new TRPCError({ code: 'BAD_REQUEST', message: 'product not found' });
      return getProduct;
    }),
});

//* get products by params i want to filter out product like category i want to append the params
