import { Router } from 'express';
import { getAllFoods, getDetailedFood } from '../controllers/foodController';
import { getActivity } from '../controllers/activityController';
import { accessValidation } from '../middlewares';

const router = Router();

router.use(accessValidation);
router.get('/foods', getAllFoods);
router.get('/foods/:id', getDetailedFood);
router.get('/foods/{id}', getDetailedFood);
router.get('/activity', getActivity);

export default router;
