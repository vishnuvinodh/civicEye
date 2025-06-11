import mongoose from "mongoose";


let userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    state:{
        type:String,
        
    },
    
    addrass:{
        type:String,
    
    },
    prooftype:{
        type:String,
    
    },
    usertype:{
        type:String,
    },
   
   
    createdAt: {
        type: Date,
        default: Date.now,
      }
    
})

let user=mongoose.model("user",userschema)
export default user