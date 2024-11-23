import { Request, Response } from 'express';
import prisma from '../libs/prisma';
import { randNum } from '../services/randNum';

export const getTrivia = async (req: Request, res: Response) => {
  let randId = randNum(191);

  const trivia = await prisma.trivia.findFirst({
    where: {
      id: randId,
    },
  });

  if (!trivia) {
    res.status(404).json({
      message: 'trivia gagal didapatkan',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan trivia',
    error: false,
    data: {
      trivia: trivia.trivia,
    },
  });
  return;
};
