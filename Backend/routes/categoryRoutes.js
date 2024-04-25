import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryProducts,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/:categoryId/products", getCategoryProducts);
router.get("/getAll", getAllCategories);

export default router;
