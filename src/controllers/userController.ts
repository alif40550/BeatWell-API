import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/env';

export const deleteUser = (req: Request, res: Response) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  // Remove 'Bearer ' prefix if present
  const token = authorization.startsWith('Bearer ')
    ? authorization.slice(7)
    : authorization;

  if (!JWT_SECRET) {
    throw new Error(
      'JWT_SECRET is not defined. Check your environment configuration.'
    );
  }
  // Verify the token
  const decoded = jwt.verify(token, JWT_SECRET);

  // Access the `id` from the decoded payload
  if (typeof decoded !== 'string') {
    const userId = (decoded as { id: Number }).id;
    console.log(userId);
    return;
  }
};
