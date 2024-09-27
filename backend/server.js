import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((error) => console.log(error.message));
