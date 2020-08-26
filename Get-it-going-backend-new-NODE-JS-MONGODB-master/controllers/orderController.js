const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();


const Order = require("../models/order");

router.post('/', async (req, res) => {

  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    cartData : req.body.data   ,
    total:req.body.total
});

  await order.save()
  res.send({
    message: 'Order is Created'
  })
})





router.get("/", (req, res) => {
  Order.find((err,docs)=>{
    if(!err){
      console.log('no error')
    }else{
      res.status(404)
    }
  })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.send(user)
      } else {
        res.send(user);
      }
    })
});

module.exports = router;
