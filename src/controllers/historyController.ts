import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserData } from '../models/user';
import {
  deleteHistory,
  getHistories,
  getHistoryById,
} from '../services/history';
import { JWT_SECRET } from '../utils/env';

export const indexUserHistories = async (req: Request, res: Response) => {
  const token = req.headers.authorization!;
  const user = jwt.verify(token, JWT_SECRET!) as UserData;
  const histories = await getHistories(user.id);
  // if (histories.length === 0) {
  //   res.status(404).json({
  //     message: 'History not found',
  //     error: true,
  //   });
  //   return;
  // }
  res.status(200).json({
    message: 'berhasil mendapatkan list history',
    error: false,
    data: histories,
  });
};

export const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({
      message: 'Id is not valid',
      error: true,
    });
    return;
  }
  const history = await getHistoryById(id);
  res.status(200).json({
    message: 'berhasil mendapatkan history',
    error: false,
    data: history,
  });
};

export const destroy = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(404).json({
      message: 'Id is not found',
      error: true,
    });
    return;
  }
  await deleteHistory(id);
  res.status(200).json({
    message: 'berhasil',
    error: false,
  });
};
