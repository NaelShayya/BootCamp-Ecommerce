import express from "express";
import {
  createOrder,
  getOrderDetails,
} from "../controllers/orderController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route to create a new order
router.post("/create", authMiddleware, createOrder);

// Route to get order details for the authenticated user
router.get("/getOrderDetails", authMiddleware, getOrderDetails);

export default router;
