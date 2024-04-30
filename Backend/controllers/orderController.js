import Order from "../models/Order.js";
import Product from "../models/Product.js";

const createOrder = async (req, res) => {
  try {
    const { user, products } = req.body;

    const productsDetails = await Product.find({ _id: { $in: products } });

    const totalAmount = productsDetails.reduce(
      (total, product) => total + product.price,
      0
    );

    const newOrder = new Order({
      user,
      products,
      totalAmount,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createOrder };
