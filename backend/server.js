import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import router from './routes/route.js';

dotenv.config()

const port=process.env.PORT || 4000;

const app=express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Enable cookies and credentials
}));


app.get('/',(req,res)=>{
    console.log("API is running....")
    res.send("API is running....")
})
app.use('/api', router);


app.listen(port,async ()=>{

     try {
        await connectDB();
     } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
     }
    
    console.log(`Server is running on por ${port}`)
})


