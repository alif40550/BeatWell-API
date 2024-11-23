import { Request, Response } from 'express';
import prisma from '../libs/prisma';
import { randNum } from '../services/randNum';

export const getActivity = async (req: Request, res: Response) => {
  const randId = randNum(10);

  const activity = await prisma.activity.findUnique({
    where: {
      id: randId,
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