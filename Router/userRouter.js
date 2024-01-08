const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { userModel } = require("../Schema/userSchema");
const userRouter=express.Router();


userRouter.post("/register",async(req,res)=>{
  const {firstname,lastname,email,password}=req.body;

try {
  bcrypt.hash(password,5,async(err,hash)=>{
    if(err){
      res.send({"err":err})
    }
    else{
      const user= new userModel({firstname,lastname,email,password:hash});
      await user.save();
      res.json({"msg":"user has been regitered successfully",user:req.body})
    }
  })
} catch (error) {
  res.send({"error":error})
}
})



userRouter.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  try {
    const user = await userModel.findOne({email});
    if(user){
      bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
          const token=jwt.sign({userID:user._id},"task");
          res.send({"msg":"user logged in","token":token})
        }
        else {
          res.send({"err":err})       }
      })
    }
    else{
      res.send({"msg":"user does not exist"})
    }
  } catch (error) {
    res.send({"error":error})
  }
})


  module.exports={
    userRouter
  }