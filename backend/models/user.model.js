import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    configID:{type:String,required:true,unique:true},
    data:{type:[[String]],default:[[]]},
    remark:{type:String,default:""},
},{timestamps:true})

export const User = mongoose.model('User',userSchema);


