const mongoose = require("mongoose")

 var adminSchema = mongoose.Schema({
  
    title:String,
    adminResponce:String,
    userAccount:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userAccount',
        required:true 
    },
//     startCampaign:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'startCampaign',
//     required:true 
// },

})
module.exports = mongoose.model('admin',adminSchema);