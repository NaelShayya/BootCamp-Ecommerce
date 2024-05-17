import Payment from "../models/Payment.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import { stripeClient } from "../config/stripeConfig.js";

const createPayment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { paymentMethod, customerEmail, cardholderName, billingAddress } =
      req.body;

    // Find the pending order for the user
    const order = await Order.findOne({
      userId,
      status: "pending",
    }).populate("products");

    if (!order) {
      return res
        .status(404)
        .json({ message: "No pending order found for this user" });
    }

    // Calculate the total amount from the order
    const amount = order.totalAmount;

    // Create payment intent with Stripe
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: "usd",
      payment_method: paymentMethod, // Stripe payment method ID
      confirm: true,
      metadata: {
        orderId: order._id.toString(), // Convert orderId to string
      },
      return_url: "http://localhost:3000/checkout/success", // Specify your return URL here
    });

    // Check if payment was successful
    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ message: "Payment failed" });
    }

    // Save payment details in your database
    const newPayment = new Payment({
      userId: userId,
      amount,
      paymentIntentId: paymentIntent.id,
      orderId: order._id,
      customerEmail,
      cardholderName,
      billingAddress,
    });
    await newPayment.save();

    // Update order status to completed
    await Order.findByIdAndUpdate(order._id, { status: "completed" });

    // Update user's purchased products
    await User.findByIdAndUpdate(userId, {
      $push: {
        purchased_products: {
          $each: order.products.map((product) => product._id),
        },
      },
    });

    // Update purchasedBy field in products
    await Promise.all(
      order.products.map(async (product) => {
        await Product.findByIdAndUpdate(product._id, {
          $push: { purchasedBy: userId },
        });
      })
    );

    res.status(201).json({
      message: "Payment created successfully",
      payment: newPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createPayment };
