const jwt=require('jsonwebtoken');
const User=require('../models/userModel');

const requireAuth=async(req,res,next)=>{
    const {authorization}=req.headers;

    if(!authorization) return res.status(401).json({error:"Authorization token needed"});
    
    const token=authorization.split(' ')[1];

    try {
        const {_id}=jwt.verify(token,process.env.SECRET); // returns jwt payload if token's valid

        // attaching the jwt payload(user_id)
        req.user=await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        res.status(401).json({error:"Authorization token invalid"});
    }
}

module.exports=requireAuth;