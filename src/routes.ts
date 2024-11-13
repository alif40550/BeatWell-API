import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Express + TypeScript Server!',
    error: false,
  });
});

export default router;
