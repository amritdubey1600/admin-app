const User=require('../models/userModel.js');
const jwt=require('jsonwebtoken');

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}

const loginUser=async(req,res)=>{
    const {email,password,type}=req.body;

    try {
        const user=await User.login(email,password,type);
        const token=createToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const signupUser=async(req,res)=>{
    const {name,email,phNo,password,type}=req.body;

    try {
        const user=await User.signup(name,email,phNo,password,type);
        const token=createToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const deleteUser=async(req,res)=>{
    const {id}=req.params;

    try {
        const deletedUser=await User.findOneAndDelete({_id: id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({error: "Failed to delete user"});
    }
}

module.exports={loginUser, signupUser, deleteUser};