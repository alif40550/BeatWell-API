import { Router } from 'express';
import { getAllFoods, getDetailedFood } from './controllers/foodController';
import { getAllFoods, getDetailedFood } from './controller/foodController';
import { getActivity } from './controller/activityController';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Express + TypeScript Server!',
    error: false,
  });
});

router.get('/foods', getAllFoods);
router.get('/foods/:id', getDetailedFood);
router.get('/foods/{id}', getDetailedFood);
router.get('/activity', getActivity);

export default router;
