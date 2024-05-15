import { type NextApiRequest, type NextApiResponse } from 'next';
import { buffer } from 'stream/consumers';
import Stripe from 'stripe';
import { env } from '~/env';

export const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const signature = req.headers['stripe-signature'] as string;
    const buf = await buffer(req);
    let event;
    try {
      event = Stripe.webhooks.constructEvent(buf, signature, env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      let msg = 'Unknown Error';
      if (err instanceof Error) msg = err.message;
      res.status(400).send(`webhook error ${msg}`);
      return;
    }
    console.log({ event });
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentSucceed = event.data.object;
        return res.json({ code: 'success', paymentSucceed });
        break;
      default:
        console.log(`unhandled event type ${event.type}`);
    }
  }
};
