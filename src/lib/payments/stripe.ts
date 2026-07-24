import "server-only";
import Stripe from "stripe";

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export const stripe = new Stripe(required("STRIPE_SECRET_KEY"), {
  typescript: true,
});
