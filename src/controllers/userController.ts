import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/env';
import { UserData } from '../models/User';
import prisma from '../libs/prisma';

export const deleteUser = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token!, JWT_SECRET!);

  if (typeof decoded !== 'string') {
    const { id } = decoded as UserData;
    console.log(id);
    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({
      message: 'User deleted successfully',
      error: false,
    });
    return;
  }
};
