import stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripeSecretKey = () => {
  return process.env.STRIPE_SECRET_KEY;
};

const stripeClient = new stripe(stripeSecretKey());

export { stripeClient };
