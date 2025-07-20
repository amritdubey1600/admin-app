const express=require('express');
const requireAuth=require('../middlewares/requireAuth');
const {loginUser, signupUser, deleteUser}=require('../controllers/userController');

const router=express.Router();

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.use(requireAuth);
router.delete('/:id', deleteUser);

module.exports=router;