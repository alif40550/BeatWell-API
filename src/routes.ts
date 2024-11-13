import { Router } from 'express';
import { getAllfoods } from './controller/foodController';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Express + TypeScript Server!',
    error: false,
  });
});

router.get('/foods', getAllfoods)

export default router;
