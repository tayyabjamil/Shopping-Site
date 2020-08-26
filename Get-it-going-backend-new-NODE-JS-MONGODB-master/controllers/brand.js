const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const Brand = require("../models/brand");
const Admin = require("../models/admin")
router.post('/', async (req, res) => {

  const brand = new Brand({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    sample: req.body.sample,
    price: req.body.price,
    image: req.body.mainImage,
    type:req.body.type
  });

  await brand.save()
  res.send({
    message: 'Brand is Created'
  })
})
// router.post("/", upload.single(mainImage),(req, res, next) => {
//   const uploader = async (path) => await cloudinary.upload(path,'mainImage')
// cloudinary.uploader.upload(file.tempFilePath,function(err,result){
// console.log(result);
// })
//  return brand.save()
// .then(result => {

//   res.status(201).json({
//     message: "Brand LAunched",
//   });
// })
// .catch(err => {

//   return res.status(404).json({
//     message: "No Brand"
//   });
// });


// });





router.get("/", (req, res) => {
  Brand.find((err,docs)=>{
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
router.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});


module.exports = router;
