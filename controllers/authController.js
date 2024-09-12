import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt  from "jsonwebtoken";



export const  registerController =async(req,res)=>{
    try {
        const{name,email,password,phone,address,question}= req.body;
        if(!name){
            return res.send({
                error:'Name is required'
            });
        }
        if(!email){
            return res.send({
                message:'Email is required'
            });
        }
        if(!phone){
            return res.send({
                message:'phone is required'
            });
        }
        if(!password){
            return res.send({
                message:'password is required'
            });
        }
        if(!address){
            return res.send({
                message:'address is required'
            });
        }
        if(!question){
            return res.send({
                message:'question is required'
            });
        }
        //existing user

        const existinguser = await userModel.findOne({email});
        if(existinguser){
            return res.status(200).send({
                success:false,
                message:'user already register please log in '
            })
        }

        //registeuser
       const hashedPassword = await hashPassword(password)

        //save
        const user = await new userModel ({name,email,phone,address,password:hashedPassword,question}).save();
         res.status(201).send({
            success:true,
            message:"register succefully",
            user
         })
    


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in registration',
            error
        })
    }

}
export const  loginController =async(req,res)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'error in login'
            })

        }
        //check user if exist
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.send({

            })
        }
        //token
         const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
         res.status(203).send({
            success:true,
            message:'login successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                address:user.address,
                phone:user.phone,
                role:user.role

            },
            token
            
         })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in log in please check your username and password',
            error
        })
    }
}

//forgot password controlller

export const forgotPasswordController = async(req,res)=>{
    try {
        const{email,question,newPassword} = req.body
        if(!email){
            res.status(400).send({
                
                mesage:'emailis required'
            })
        }
        
        if(!question){
            res.status(400).send({
                
                mesage:'question is  required'
            })
        }
        
      //  if(!newPassword){
        //    res.status(400).send({
                
          //      mesage:'password is required'
           // })
       // }
        const user = await userModel.findOne({email,question})
        if(!user){
            res.status(404).send({
                success:false,
                message:'wrong email or password'
            })
        }
       const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
          });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'something went wrong'
        })
        
    }
}

//test controller
export const testController=(req,res)=>{
    res.send('protected Route')
}