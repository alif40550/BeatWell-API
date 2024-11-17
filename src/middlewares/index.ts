import { NextFunction, Request, Response } from 'express';
import { UserData, ValidationRequest } from '../models/user';
import jwt from 'jsonwebtoken';

const accessValidation = (req: Request, res: Response, next: NextFunction) => {
  const validationReq = req as ValidationRequest;
  const { authorization } = validationReq.headers;

  if (!authorization) {
    res.status(401).json({
      message: 'Token diperlukan',
      error: true,
    });
    return;
  }

  //   const token = authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET!;
  console.log(secret);

  try {
    const jwtDecode = jwt.verify(authorization, secret);
    if (typeof jwtDecode !== 'string') {
      validationReq.userData = jwtDecode as UserData;
    }
  } catch {
    res.status(401).json({
      message: 'Unauthorized',
      error: true,
    });
    return;
  }
  next();
};

export { accessValidation };
