const mongoose = require("mongoose");

var brandSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  sample:String,
  price:String,
  image:String,
  type:String
  });
module.exports = mongoose.model("brand", brandSchema);

