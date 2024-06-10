import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc';
import { userRouter } from './routers/user';
import { sellerRouter } from './routers/seller';
import { buyerRouter } from './routers/buyer';
import { commonRouter } from './routers/common';
import { productRouter } from './routers/product';
import { type inferRouterOutputs } from '@trpc/server';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  seller: sellerRouter,
  buyer: buyerRouter,
  common: commonRouter,
  product: productRouter,
});

// export type definition of API

export type RouterOutput = inferRouterOutputs<AppRouter>;
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
