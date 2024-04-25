import Payment from "../models/Payment.js";
import Transaction from "../models/Transaction.js";
import Product from "../models/Product.js";
import User from "../models/User.js"; // Import User model

const createPayment = async (req, res) => {
  try {
    const { user, productId, amount } = req.body;

    // Create a new payment record
    const newPayment = new Payment({
      user,
      amount,
    });

    await newPayment.save();

    // Create a new transaction record
    const newTransaction = new Transaction({
      user,
      product: productId, // Assuming productId is passed in the request body
      payment: newPayment._id, // Link the transaction to the newly created payment
    });

    await newTransaction.save();

    // Update the product to indicate that it has been purchased by the user
    await Product.findByIdAndUpdate(productId, {
      $push: { purchasedBy: user },
    });

    // Update the user to store the purchased product
    await User.findByIdAndUpdate(user, {
      $push: { purchased_products: productId },
    });

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
