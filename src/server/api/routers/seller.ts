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
  getSellProduct: sellerProcedure.query(async ({ ctx }) => {
    const selledProduct = await ctx.db.sellerProfile.findUnique({
      where: {
        sellerProfileId: ctx.session.user.id,
      },
    });
    if (!selledProduct) throw new TRPCError({ code: 'NOT_FOUND', message: 'product not found' });
    return selledProduct;
  }),
  addStock: sellerProcedure
    .input(
      z.object({
        size: z.enum(['sm', 'xs', 'md', 'lg', 'xl']),
        colors: z.array(z.object({ color: z.string(), count: z.number() })),
        productId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { size, colors, productId } = input;
      //* the stock count will be done on based on color count data
      let totalStockSizeWise = 0;
      if (colors) {
        for (let i = 0; i < colors?.length; i++) {
          if (colors[i]?.count) {
            totalStockSizeWise += colors[i]?.count ?? 0;
          }
        }
      }

      const createSize = await ctx?.db?.sizeModal?.create({
        data: { size, colors, productId, stock: totalStockSizeWise },
      });
      if (!createSize)
        throw new TRPCError({ code: 'UNPROCESSABLE_CONTENT', message: 'unable to add colors' });
      return createSize;
    }),

  addImages: sellerProcedure
    .input(z.object({ productId: z.string(), image: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { image, productId } = input;
      const addImageInDb = await ctx.db.images.create({
        data: {
          image,
          productId,
        },
      });
      if (!addImageInDb)
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'unable to add images' });
      return addImageInDb;
    }),
});
