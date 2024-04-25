import express from "express";
import {
  createProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
  editProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/products", createProduct);
router.get("/products/:identifier", getProduct);
router.delete("/products/:identifier", deleteProduct);
router.get("/products", getAllProducts);
router.put("/products/:identifier", editProduct);

export default router;
