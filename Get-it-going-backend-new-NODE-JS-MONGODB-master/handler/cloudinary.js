const cloudinary = require('cloudinary')
const dotaenv = require('dotenv')
dotaenv.config()
cloudinary.config({
cloud_name:'du9ancfpi',
api_key:'346773468842177',
api_secret:'e4d24p1Giy-mOYHkdSnYsX1ZQNs'
})
exports.uploads=(file,folder)=>{
  return new Promise (resolve=>{
    cloudinary.uploader.upload(file,(result)=>{
resolve({
  url:result.url,
  id:result.public_id
})
    },{
resource_type:"auto",
folder:folder
    })
  })
}
