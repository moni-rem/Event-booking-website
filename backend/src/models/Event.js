import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  date: { type: Date, required: true },
});

export const Event = mongoose.model("Event", eventSchema);



