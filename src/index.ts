import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import express, { Request, Response } from 'express';

// Create a new express application instance
const app = express();
const prisma = new PrismaClient();

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({
    error: false,
    message: 'Welcome to the Express + TypeScript Server!',
    users,
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
