import dotenv from 'dotenv';
import express, { Application } from 'express';

// Load environment variables
dotenv.config({ path: `./config/${process.env.NODE_ENV}.env` });

const app: Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/index'));

// Start server
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});