import express from "express";
import {
  getAllUsers,
  getUserByID,
  updateUser,
  lockUser,
  unlockUser,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkAdmin from "../middlewares/checkAdmin.js";

const router = express.Router();

router.get("/getAllUsers", authMiddleware, checkAdmin, getAllUsers);
router.get("/getUserByID", authMiddleware, getUserByID);
router.patch("/updateUser/:userId", authMiddleware, updateUser);
router.put("/block/:userId", authMiddleware, checkAdmin, lockUser);
router.put("/unblock/:userId", authMiddleware, checkAdmin, unlockUser);

export default router;
