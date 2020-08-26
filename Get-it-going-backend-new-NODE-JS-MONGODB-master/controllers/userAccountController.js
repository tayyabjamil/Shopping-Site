const express = require("express");
var router = express.Router();
var userAccount = require("../models/userAccount");
const mongoose = require("mongoose");



router.post("/signUp", (req, res) => {
  userAccount
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "mail already exist",
        });
      } else {
        var userData = new userAccount({
          _id: new mongoose.Types.ObjectId(),
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          adress:req.body.adress,
          contact:req.body.contact
        });
        userData.save((error, userData) => {
          if (error) {
            console.log(error);
          } else {
            res.status(200);
            console.log("Sign up");
          }
        });
      }
    });
});


router.post("/login", (req, res) => {
  userAccount
    .find({ email: req.body.email })

    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(404).json({
          message: "user not found",
        });
      } else {
        console.log("login");
        username = user[0].username;
        adress=user[0].adress;
        contact = user[0].contact;
        userId = user[0].id;
        res.status(200).send({ userId,username ,adress,contact});
      }
    });
});
// router.get("/:id", (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send("NO record with given id : ${req.params.id}");
//   userAccount
//     .findById(req.params.id, (err, doc) => {
//       if (!err) {
//         res.send(doc);
//         console.log(doc);
//       } else {
//         console.log(
//           "Error in Retriving Useraccounts:" + JSON.stringify(err, undefined, 2)
//         );
//       }
//     })
//     .populate("startCampaigns ");
// });
// router.get("/", (req, res) => {
//   userAccount.find((err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(
//         "Error in Retriving userAccounts:" + JSON.stringify(err, undefined, 2)
//       );
//     }
//   });
// });


// router.post("/:userAccountId/startcampaigns", uploadImage.single('mainImage'),async (req, res) => {
//   //find User Account
//   const useraccount = await userAccount.findOne({ _id: req.params.userAccountId});

//   // // // Start new Campaign
//   const startCampaign = new StartCampaign();

//   startCampaign.title = req.body.title,
//     startCampaign.tagline = req.body.tagline,
//     // startCampaign.image= req.file.path,
//     startCampaign.amount = req.body.amount,
//     startCampaign.description = req.body.description;
//     startCampaign.pledgeAmount = req.body.pledgeAmount,
//     startCampaign.rewardDetails = req.body.rewardDetails;
//     startCampaign.mainImage = req.file.filename;

//   startCampaign.useraccount = useraccount._id;
//   await startCampaign.save();

//   // // //associate userAccount with course
//   useraccount.startCampaigns.push(startCampaign._id);
//   await useraccount.save();

//   res.send(startCampaign);
// });
// router.post("/:userAccountId/backcampaigns", async (req, res) => {
//   //find User Account
//   const useraccount = await userAccount.findOne({
//     _id: req.params.userAccountId
//   });

//   // // // Start new Campaign
//   const backCampaign = new BackCampaign();

//   (backCampaign.name = req.body.name),
//     (backCampaign.reward = req.body.reward),
//     // backCampaign.image= req.file.path,
//     (backCampaign.investment = req.body.investment),
//     (backCampaign.useraccount = useraccount._id);
//   await backCampaign.save();

//   // // //associate userAccount with course
//   useraccount.backCampaigns.push(backCampaign._id);
//   await useraccount.save();

//   res.send(backCampaign);
// });

module.exports = router;
