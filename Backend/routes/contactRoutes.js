// routes/contactFormRoutes.js
import express from "express";
import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

// Route for handling form submissions
router.post("/submitContact", submitContactForm);

export default router;
