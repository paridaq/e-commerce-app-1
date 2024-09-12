import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify'

export const createCategoryController = async(req,res)=>{
    try {
        const{name}= req.body;
        if(!name){
          return  res .status(400).send({
                message:'name is required'
            })
        }
        const existingcategory = await categoryModel.findOne({name})
        if(existingcategory){
         return   res.send({
                success:true,
                message:'category alreday exists'
            })
        }
        const category = new categoryModel({name,slug:slugify(name)}).save()
        res.status(200).send({
            success:true,
            message:'category created succesfully',
            category
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Can not create category'
        })
        
    }
}
export const updateCategoryController = async(req,res)=>{
    try {
        const{name} = req.body
        const{id} = req.params
       const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true})
       res.status(201).send({
        success:true,
        message:'updated succesfully'
       })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error while updating category',
            error
        })
    }
}


export const categoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:'All category lists',
            category
        })

        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            succes:false,
            message:'Can not find category',
            error
        })
        
    }
}
export const sigleCategoryController = async(req,res)=>{
    try {
        
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'Get single category succesfuly',
            category
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error while getting single category'
        })
        
    }
}

export const deleteCategoryController = async(req,res)=>{

    try {
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:'category deleted succesfully'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error while deleting category',
            error
        })
        
    }
}