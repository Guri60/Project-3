const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Item", itemSchema);