const mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  cartData:[],
  total:String
  });
module.exports = mongoose.model("order", orderSchema);

