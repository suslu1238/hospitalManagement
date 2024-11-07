import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});



// server.js

// server.js

// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

// // Import routers
// import userRouter from './router/userRouter.js';
// import messageRouter from './router/messageRouter.js';
// import appointmentRouter from './router/appointmentRouter.js';

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use('/api/users', userRouter);
// app.use('/api/messages', messageRouter);
// app.use('/api/appointments', appointmentRouter);

// // MongoDB Connection
// const mongoURI = 'mongodb://localhost:27017/HMS'; // Replace 'your-database-name' with your actual database name

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         // Start server only after MongoDB is connected
//         app.listen(4000, () => {
//             console.log('Server is running on port  4000');
//         });
//     })
//     .catch(error => {
//         console.error('Error connecting to MongoDB:', error);
//     });
