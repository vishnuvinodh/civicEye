import mongoose from "mongoose";

let complaint=new mongoose.Schema({
    description:{
        type:String,

    },
    complainttype:{
        type:String
    },
    location:{
        type:String
    },
    proof:{
        type:String
    },
    status:{
        type:String,
        default:"pending"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        
    },

    },
    {timestamps:true}
);

const complaints=mongoose.model("complaints",complaint);

export default complaints;