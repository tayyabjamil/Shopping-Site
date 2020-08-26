const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();


const Admin = require("../models/admin")
const UserAccount = require("../models/userAccount");
router.post("/", (req, res, next) => { 
   
      
    const admin = new Admin({
   
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        adminResponce: req.body.adminResponce,
        userAccount:req.body.userAccountId,
        // startCampaign:req.body.startCampaignId,
      });
 
      return admin.save()
      .then(result => {
  
        res.send(result)
      })
      .catch(err => {
      
        return res.status(404).json({
          message: "No Campaign found"
        });
      });;
     
    
})
    
   
router.get('/:id', async(req,res)=>{
  Admin.find({ userAccount: req.params.id })
  .exec()
  .then(user => {
    if (user.length < 1) {
      res.send(user)
    }
  res.send(user).status(200)
  }
  )
})
router.get('/approves/:id', async(req,res)=>{
    Admin.find({ userAccount: req.params.id })
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.send(user)
      }else{
       if(user.adminResponce == "true")
       {       
        res.send(user)
      }
    
    }
})
  })
  router.get('/disapproves/:id', async(req,res)=>{
    Admin.find({ userAccount: req.params.id })
    .exec()
    .then(user => {
      if (user.length < 1) {
        res.send(user)
      }else{
       if(user.adminResponce == "false")
       {       
        res.send(user)
      }
    
    }
})
  })
// router.get('/',async(req,res)=>{
//   admin.find()
//   .exec()
//   .then(user => {
//     if (user.length < 1) {
//       return res.status(404).json({
//         message: "No Review Posted"
//       });
//     }else{
//       res.send(user)
//     }
  
//   }
//   )
// })

  module.exports = router;
