import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  try {
    const { name, price, slug, description, product_image, category } =
      req.body;

    // Check if a product with the same slug already exists
    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Product with this slug already exists" });
    }

    const newProduct = new Product({
      name,
      price,
      slug,
      description,
      product_image,
      category,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      // Fetch all products for admin
      const products = await Product.find();
      return res.status(200).json({ products });
    } else {
      // Fetch purchased products for user
      const products = await Product.find({ purchasedBy: req.user.userId });
      return res.status(200).json({ products });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllProductsForUser = async (req, res) => {
  try {
    // Fetch purchased products for user
    const products = await Product.find({ purchasedBy: req.user.userId });
    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { identifier } = req.params;

    const product = await Product.findOne({
      $or: [{ slug: identifier }, { name: identifier }],
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { identifier } = req.params;

    const deletedProduct = await Product.findOneAndDelete({
      $or: [{ slug: identifier }, { name: identifier }],
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const editProduct = async (req, res) => {
  try {
    const { identifier } = req.params;
    const updates = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { $or: [{ slug: identifier }, { name: identifier }] },
      updates,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  createProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
  editProduct,
  getAllProductsForUser,
};
