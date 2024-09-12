import express from 'express'
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, sigleCategoryController, updateCategoryController,deleteCategoryController } from '../controllers/categoryController.js';


const router = express.Router();

router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update categoryModel

router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

router.get('/get-category',categoryController)

router.get('/single-category/:slug',sigleCategoryController)

//delete operation
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router