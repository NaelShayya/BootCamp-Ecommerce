import Payment from "../models/Payment.js";
import Transaction from "../models/Transaction.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
import Product from "../models/Product.js";

const createPayment = async (req, res) => {
  try {
    const { user, orderId, amount } = req.body;

    // Find the order
    const order = await Order.findById(orderId).populate("products");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const totalAmount = order.totalAmount;

    const newPayment = new Payment({
      user,
      amount: totalAmount,
    });

    await newPayment.save();

    const newTransaction = new Transaction({
      user,
      order: orderId,
      payment: newPayment._id,
    });

    await newTransaction.save();

    await Order.findByIdAndUpdate(orderId, { status: "completed" });

    await User.findByIdAndUpdate(user, {
      $push: { purchased_products: { $each: order.products } },
    });

    await Promise.all(
      order.products.map(async (product) => {
        await Product.findByIdAndUpdate(product._id, {
          $push: { purchasedBy: user },
        });
      })
    );

    res.status(201).json({
      message: "Payment created successfully",
      payment: newPayment,
      transaction: newTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createPayment };
