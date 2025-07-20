const express=require('express');
const requireAuth=require('../middlewares/requireAuth');
const {getUsers, updateUserById}=require('../controllers/adminController');

const router=express.Router();

router.use(requireAuth);

router.get('/', getUsers);

router.patch('/updateById', updateUserById);

module.exports=router;