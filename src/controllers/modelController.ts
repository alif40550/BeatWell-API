import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserData } from '../models/user';
import { predictionSchema } from '../libs/validator/prediction.schema';
import makePrediction from '../services/prediction';
import { addHistory } from '../services/history';
import { JWT_SECRET } from '../utils/env';

export const predictCHD = async (req: Request, res: Response) => {
  const token = req.headers.authorization!;
  const user = jwt.verify(token, JWT_SECRET!) as UserData;
  // try {
  const validatedBody = predictionSchema.parse(req.body);
  const input: number[] = [
    validatedBody.sex === 'male' ? 1 : 0,
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
    data: {
      persentage,
      user,
    },
  });
  // } catch (err) {
  // res.status(400).json({
  //   message: 'Prediction failed, there are incorrect request',
  //   error: true,
  //   data: err
  // });
  // }
};
