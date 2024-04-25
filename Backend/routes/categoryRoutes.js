import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryProducts,
} from "../controllers/categoryController.js";

import {
  validateCreateCategory,
  validateUpdateCategory,
} from "../validators/categoryValidator.js";

const router = express.Router();

router.post("/create", validateCreateCategory, createCategory);
router.get("/:categoryId/products", getCategoryProducts);
router.get("/getAll", getAllCategories);

export default router;
