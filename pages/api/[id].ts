import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const session = await stripe.checkout.sessions.retrieve(id as string, {
    expand: ["payment_intent"],
  });

  res.status(200).json({ session });
}
