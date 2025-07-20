const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phNo:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    }
});

userSchema.statics.signup=async function(name,email,phNo,password,type){
    if(!email || !password) throw Error('All fields must be filled');

    if(!validator.isEmail(email)) throw Error('Invalid Email');

    if(!validator.isStrongPassword(password)) throw Error('Weak Password');

    const exists=await this.findOne({email});
    if(exists) throw Error('Email in use');

    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);

    const user=await this.create({name,email,phNo,password: hash,type});

    return user;
}

userSchema.statics.login=async function(email,password,type) {
    if(!email || !password) throw Error('All fields must be filled');

    const user=await this.findOne({email,type});
    if(!user) throw Error('User does not exist');

    const match=await bcrypt.compare(password,user.password);
    if(!match) throw Error('Password Incorrect');

    return user;
}

module.exports=new mongoose.model('User', userSchema);