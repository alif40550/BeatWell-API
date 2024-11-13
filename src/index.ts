import 'dotenv/config';
import express, { Request, Response } from 'express';

// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get('/', async (req: Request, res: Response) => {
  res.json({
    error: false,
    message: 'Welcome to the Express + TypeScript Server!',
  });
});

// Start the Express server
const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

export default server;
