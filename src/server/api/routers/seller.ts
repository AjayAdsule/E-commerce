import { z } from 'zod';
import { createTRPCRouter, sellerProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { db } from '~/server/db';

export const sellerRouter = createTRPCRouter({
  listProduct: sellerProcedure
    .input(
      z.object({
        productName: z.string().min(4, { message: 'Product name should minimum 4 character' }),
        price: z.number(),
        productDescription: z
          .string()
          .min(12, { message: 'Product description should minimum 12 character' }),
        coverImage: z
          .string()
          .min(12, { message: 'Product description should minimum 12 character' }),
        stock: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { session } = ctx;
      const { productName, price, productDescription, coverImage, stock } = input;
      const listProducts = await db.products.create({
        data: {
          price,
          coverImage,
          productDescription,
          productName,
          stock,
          sellerId: session.user.id,
        },
      });
      if (!listProducts)
        throw new TRPCError({ code: 'UNPROCESSABLE_CONTENT', message: 'unable to list products' });
      return listProducts;
    }),
  updateProduct: sellerProcedure
    .input(
      z.object({
        productName: z.string().min(4, { message: 'Product name should minimum 4 character' }),
        price: z.number(),
        productDescription: z
          .string()
          .min(12, { message: 'Product description should minimum 12 character' }),
        coverImage: z
          .string()
          .min(12, { message: 'Product description should minimum 12 character' }),
        stock: z.number(),
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...updatedData } = input;
      const product = await ctx.db.products.update({
        where: {
          id,
        },
        data: updatedData,
      });
      if (!product)
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Product not found' });
      return product;
    }),
});
