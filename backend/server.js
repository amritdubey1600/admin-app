require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoutes');
const adminRoutes=require('./routes/adminRoutes');

const app=express();

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req,res)=>{
    res.status(200).json({msg: 'Hello world!'});
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(3000, ()=>{
        console.log("Connected to DB and server working on PORT 3000");
    });
});