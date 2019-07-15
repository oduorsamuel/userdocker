const mongoose=require("mongoose");
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema= mongoose.Schema;

let userSchema=new Schema({
first_name:{
     type:String,
     required:true
 },
 last_name:{
     type:String,
     required:true   
 },
 user_name:{
    type:String,
    default:null
},
email:{
    type:String, 
    required:true,
},
 address:{
    type:String,
    required:true 
},
mobile_number:{
    type:Number,
    required:true 
},
telephone_number:{
    type:Number,
    required:true 
},
 gender:{
     type:String,
     required:true
 },
 IsDeleted: {
    type: Number,
    default: 0
},
 DeletedAt:{
    type:Date,  
    default:null
},
DeletedBy:{
    type:String,  
    default:null
},
updated_at:{
    type:Date,  
    default:null
},
 updated_by:{
     type:String,
     default:null
 }
},
{ versionKey: false })
module.exports=Users=mongoose.model('Users',userSchema);