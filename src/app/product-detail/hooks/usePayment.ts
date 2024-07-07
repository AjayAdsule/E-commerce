import { loadStripe } from '@stripe/stripe-js';
import { env } from 'process';
import { clientApi } from '~/trpc/react';

export default function usePayment() {
  const { mutateAsync: checkout } = clientApi.buyer.checkout.useMutation();

  const stripePromise = loadStripe(
    'pk_test_51O9m6ySJDbl4dha4XVFIOcpCsf6ox3iJp5IswxuxnZbHLOM6huZOxhMn61GAGkFRrDvauMzXx5FXcLipuEUn0ReX00zlqKIE7K',
  );
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
      orderId: 'dummy',
    });
    const redirect = await stripe?.redirectToCheckout({ sessionId: orderPayload.id });
    return { redirect };
  };
  return { processToPay };
}
