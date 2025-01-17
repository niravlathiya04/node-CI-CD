import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import router from './routes/index';

// Load environment variables

const app: Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});