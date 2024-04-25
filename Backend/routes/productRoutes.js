import express from "express";
import {
  createProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
  editProduct,
  getAllProductsForUser,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAllProductsForUser", authMiddleware, getAllProductsForUser);
router.get("/:identifier", getProduct);
router.delete("/:identifier", deleteProduct);
router.put("/:identifier", editProduct);

export default router;
