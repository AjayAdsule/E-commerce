import { loadStripe } from '@stripe/stripe-js';
import { env } from 'process';
import { clientApi } from '~/trpc/react';

export default function usePayment() {
  const { mutateAsync: checkout } = clientApi.buyer.checkout.useMutation();
  const stripePromise = loadStripe(env.STRIPE_LOAD_SECRET ?? '');
  const processToPay = async ({
    name,
    amount,
    quantity,
  }: {
    name: string;
    amount: number;
    quantity: number;
  }) => {
    const stripe = await stripePromise;
    const orderPayload = await checkout({
      name,
      amount,
      quantity,
      currency: 'inr',
    });
    const redirect = await stripe?.redirectToCheckout({ sessionId: orderPayload.id });
    return { redirect };
  };
  return { processToPay };
}
