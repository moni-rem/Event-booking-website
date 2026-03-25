import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  bookedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
});

export const Booking = mongoose.model("Booking", bookingSchema);