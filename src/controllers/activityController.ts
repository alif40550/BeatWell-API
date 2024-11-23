import { Request, Response } from 'express';
import prisma from '../libs/prisma';

export const getActivity = async (req: Request, res: Response) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  const activity = await prisma.activity.findUnique({
    where: {
      id: randomNum,
    },
  });

  if (!activity) {
    res.status(400).json({
      message: 'gagal mendapatkan data activity',
      error: true,
    });
    return;
  }
  res.status(200).json({
    message: 'berhasil mendapatkan activity',
    error: false,
    data: activity,
  });
  return;
};