import Order from "../models/Order.js";
import Product from "../models/Product.js";

const createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    const productsDetails = await Product.find({ _id: { $in: products } });

    //adds price of the current product to the total 
    const totalAmount = productsDetails.reduce(
      (total, product) => total + product.price,
      0 //initial value of total 
    );

    const newOrder = new Order({
      userId,
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

const getOrderDetails = async (req, res) => {
  try {
    const decodedToken = req.user; // Use decoded token from the request object
    const userId = decodedToken.userId;

    const orders = await Order.find({
      userId,
      status: { $in: ["pending"] },
    }).populate("products");

    console.log("Orders:", orders);

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createOrder, getOrderDetails };
