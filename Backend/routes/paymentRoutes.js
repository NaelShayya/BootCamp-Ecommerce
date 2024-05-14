import express from "express";
import { createPayment } from "../controllers/paymentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

import {validateCreatePayment} from "../validators/paymentValidator.js"

const router = express.Router();

router.post("/create", authMiddleware,validateCreatePayment, createPayment);

export default router;
