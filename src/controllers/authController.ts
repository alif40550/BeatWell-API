import { Request, Response } from 'express';
import { userSignInSchema } from '../libs/validator/user.schema';
import prisma from '../libs/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserData } from '../models/user';

const signIn = async (req: Request, res: Response) => {
  try {
    const validatedBody = userSignInSchema.parse(req.body);
    const user = await prisma.user.findFirst({
      where: {
        email: validatedBody.email,
      },
    });

    if (!user) {
      res.status(400).json({
        message: 'eamil or password incorrect',
        error: true,
      });
      return;
    }

    const passwordCorrcet = await bcrypt.compare(
      validatedBody.password,
      user.password!
    );

    if (!passwordCorrcet) {
      res.status(400).json({
        message: 'eamil or password incorrect',
        error: true,
      });
      return;
    }

    const payload: UserData = {
      id: user.id,
      name: user.name || user.email.split('@')[0],
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: 'Login success',
      error: false,
      data: payload,
      token,
    });
  } catch {
    res.status(400).json({
      message: 'Email and password are required',
      error: true,
    });
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const validatedBody = userSignInSchema.parse(req.body);
    const isExisted = await prisma.user.findFirst({
      where: {
        email: validatedBody.email,
      },
    });

    if (isExisted) {
      res.status(400).json({
        message: 'Your credential is not valid',
        error: true,
      });
      return;
    }

    await prisma.user.create({
      data: {
        email: validatedBody.email,
        password: await bcrypt.hash(validatedBody.password, 10),
      },
    });

    res.status(200).json({
      message: 'Sign up success',
      error: false,
    });
  } catch {
    res.status(400).json({
      message: 'Email and password are required',
      error: true,
    });
  }
  //   if (!validatedBody) {
  //     res.status(400).json({
  //       message: 'Email and password are required',
  //       error: true,
  //     });
  //     return;
  //   }
};

export { signIn, signUp };
