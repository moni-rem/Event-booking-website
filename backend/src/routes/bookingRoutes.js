import express from "express";
import { createBooking, getAllBooking } from "../controllers/bookingController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createBooking);
router.get("/:userId", authenticateToken, getAllBooking);

export default router;
