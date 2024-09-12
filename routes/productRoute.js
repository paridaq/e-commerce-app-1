import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController,getProductController,productPhotoController,
    getSingleProductController,deleteproductController,
    updateProductController,productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    relatedProductController,
    productCategoryController} from '../controllers/productController.js';
import ExpressFormidable from 'express-formidable';

const router = express.Router();

router.post('/create-product',requireSignIn,isAdmin,ExpressFormidable(),createProductController)

//update the product
router.put('/update-product/:pid',requireSignIn,isAdmin,ExpressFormidable(),updateProductController)



router.get('/get-product',getProductController)

router.get('/get-product/:slug',getSingleProductController)

router.get('/product-photo/:pid', productPhotoController)


//delete product
router.delete('/delete-product/:pid',deleteproductController)

//filter product
router.post('/product-filters',productFiltersController)


//product count
router.get('/product-count',productCountController)

//product per page

router.get('/product-list/:page',productListController)

//search product
router.get('/search/:keyword',searchProductController)

//similar product
router.get('/related-product/:pid/:cid',relatedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)



export default router