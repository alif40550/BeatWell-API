import { Request, Response } from 'express';
import prisma from '../libs/prisma';

const getAllFoods = async (req: Request, res: Response) => {
  const foods = await prisma.food.findMany();
  if (!foods) {
    res.status(400).json({
      message: 'Gagal mendapatkan list food',
      error: true,
    });
    return;
  }
  res.status(200).json({
    message: 'Berhasil mendapatkan list food',
    error: false,
    data: [...foods],
  });
  return;
};

const getDetailedFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return;

  const food = await prisma.food.findUnique({
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

export { getAllFoods, getDetailedFood };