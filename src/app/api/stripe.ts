import { type NextApiRequest, type NextApiResponse } from 'next';
import { buffer } from 'stream/consumers';
import Stripe from 'stripe';
import { env } from '~/env';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const signature = req.headers['stripe-signature'] as string;

    let event;
    try {
      const buf = await buffer(req);
      event = stripe.webhooks.constructEvent(buf, signature, env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;
      res.status(400).send(`Webhook Error: ${message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('PaymentIntent was successfully!');
        // Handle successful payment intent here
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;
