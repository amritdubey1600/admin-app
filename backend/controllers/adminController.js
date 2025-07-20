const User=require('../models/userModel');

const getUsers=async(req,res)=>{
    const users=await User.find({type: 'User'});
    res.status(200).json(users);
}

const updateUserById=async(req,res)=>{
    console.log(req.body);
    
    const user_id=req.body._id;
    const updatedVal=req.body;

    try {
        const updatedUser=await User.findOneAndUpdate({_id: user_id},{$set: updatedVal},{new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({msg: "Failed to update user"});
    }
}

module.exports={getUsers, updateUserById};