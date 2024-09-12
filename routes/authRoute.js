import express from 'express'
import {registerController, loginController,testController,forgotPasswordController} from '../controllers/authController.js';
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';
import cors from 'cors'


const router = express.Router();

/*

router.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
*/



// routing

router.post('/register',registerController);
//login post

router.post('/login',loginController);


router.get('/test',requireSignIn,isAdmin,testController);
//protected route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
//protected route admin route
router.get("/admin-auth",requireSignIn,isAdmin ,(req,res)=>{
    res.status(200).send({ok:true})
})

router.post('/forgot-password',forgotPasswordController)
export default router;