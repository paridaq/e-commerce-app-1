import express from 'express';

import dotenv from 'dotenv';

import morgan from 'morgan';
import connectDB from './configuration/db.js';

import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import cors from "cors"


//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());




app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRoute)


//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'welcome to e-commerce app'
    })
})



// runni=ng on port
app.listen(process.env.PORT, () => {
    console.log(`server is running on port${process.env.PORT}`)

})