import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserData } from '../models/user';
import { predictionSchema } from '../libs/validator/prediction.schema';
import { makePrediction } from '../services/prediction';
import { addHistory } from '../services/history';
import { JWT_SECRET } from '../utils/env';
import { getResponse, predictClass } from '../services/chatbot';

export const predictCHD = async (req: Request, res: Response) => {
  const token = req.headers.authorization!;
  const user = jwt.verify(token, JWT_SECRET!) as UserData;
  // try {
  const validatedBody = predictionSchema.parse(req.body);
  const sexMap = {
    male: 1,
    female: 0,
  } as const;
  const sex = sexMap[validatedBody.sex.toLowerCase() as keyof typeof sexMap];
  if (sex === undefined) {
    res.status(400).json({
      message: 'Prediction failed, there are incorrect request',
      error: true,
    });
    return;
  }
  const input: number[] = [
    sex,
    validatedBody.age,
    Number(validatedBody.cigsPerday > 0),
    validatedBody.cigsPerday,
    Number(validatedBody.BPMeds),
    Number(validatedBody.prevalentStroke),
    Number(validatedBody.prevalentHyp),
    Number(validatedBody.diabetes),
    validatedBody.totChol,
    validatedBody.sysBP,
    validatedBody.diaBP,
    validatedBody.BMI,
    validatedBody.heartRate,
    validatedBody.glucose,
  ];
  const persentage = await makePrediction(input);

  await addHistory({
    userId: user.id,
    result: persentage,
  });

  res.status(200).json({
    message: 'Prediction success',
    error: false,
    data: persentage,
  });
  // } catch (err) {
  // res.status(400).json({
  //   message: 'Prediction failed, there are incorrect request',
  //   error: true,
  //   data: err
  // });
  // }
};

export const chat = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({
      error: true,
      message: 'Pesan tidak boleh kosong',
    });
    return;
  }

  const tag = await predictClass(message);
  const response = getResponse(tag);
  res.json({
    message: 'OK',
    error: false,
    data: response,
  });
};
