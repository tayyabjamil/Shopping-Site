


const express = require('express');
const app=express();
var cors = require('cors');
app.use(cors());
const methodOverride = require('method-override');

const bodyParser = require('body-parser')
const multer = require('multer');
var brandController = require('./controllers/brand')
var orderController = require('./controllers/orderController')
var userAccountController = require('./controllers/userAccountController')
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'uploads')
  },
  filename: (req, file, callBack) => {
      callBack(null, `FunOfHeuristic_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })


app.post('/file', upload.single('file'), (req, res, next) => {
  const fileData = req.body.image
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file);
})


app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
// app.use(methodOverride('_method'));

app.use('/brand',brandController)
app.use('/order',orderController)
app.use('/userAccount',userAccountController)

module.exports = app;
