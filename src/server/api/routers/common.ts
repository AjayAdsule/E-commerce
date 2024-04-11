import { db } from '~/server/db';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';

export const commonRouter = createTRPCRouter({
  getProducts: publicProcedure.query(async () => {
    const products = await db.products.findMany({});
    if (!products) throw new TRPCError({ code: 'NOT_FOUND', message: 'Unable to find products' });
    return products;
  }),
});
