import { Request, Response } from 'express';
import prisma from '../libs/prisma';
import { randNum } from '../services/randNum';

export const getRandomFoods = async (req: Request, res: Response) => {
  let randomIds = new Array();
  for (let i = 0; i < 6; i++) {
    let randId = randNum(329)
    randomIds.push(randId);
  }

  const food = await prisma.healthyFood.findMany({
    where: {
      id: { in: randomIds },
    },
  });

  if (!food) {
    res.status(404).json({
      message: 'Gagal mendapatkan data food',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan data food',
    error: false,
    data: [food],
  });
  return;
};

export const getDetailedFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return;

  const food = await prisma.healthyFood.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!food) {
    res.status(404).json({
      message: 'Gagal mendapatkan data food',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan data food',
    error: false,
    data: food,
  });
  return;
};
