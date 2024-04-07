import { z } from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { db } from '~/server/db';
import bcrypt from 'bcrypt';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(4, { message: 'minimum 4 character required' }),
        email: z.string().email({ message: 'please enter valid email address' }),
        role: z.enum(['Admin', 'User', 'Seller']),
        password: z
          .string()
          .min(4, { message: 'minimum 4 character required' })
          .max(8, { message: 'maximum 8 character required' }),
      }),
    )
    .mutation(async (opts) => {
      const { name, email, role, password } = opts.input;
      if (!name || !email)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'please provide all details',
        });
      const isUser = await db.user.findUnique({ where: { email: email } });
      if (isUser)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'user is already exist ',
        });

      const hashedPassword = await bcrypt.hash(password, 11);
      if (role === 'Seller') {
        const user = await db.user.create({
          data: {
            name,
            email,
            role,
            password: hashedPassword,
            sellerProfile: {
              create: {},
            },
          },
          include: {
            sellerProfile: true,
          },
        });
        return user;
      }
      const user = await db.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role,
          Profile: {
            create: {
              shipping_address: 'dummy',
            },
          },
        },
      });
      if (!user)
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'unable to create user',
        });
      return user;
    }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany();
    return users;
  }),
  deleteUser: publicProcedure.mutation(async () => {
    const deleteUser = await db.user.deleteMany();
    return deleteUser;
  }),
});
