import { Router } from 'express';
import { getAllFoods, getDetailedFood } from '../controllers/foodController';
import { getActivity } from '../controllers/activityController';
import { accessValidation } from '../middlewares';
import { predictCHD } from '../controllers/modelController';
import { getById, indexUserHistories } from '../controllers/historyController';

const router = Router();

router.use(accessValidation);
router.get('/foods', getAllFoods);
router.get('/foods/:id', getDetailedFood);
router.get('/foods/{id}', getDetailedFood);
router.get('/activity', getActivity);
router.post('/prediction', predictCHD);
router.get('/histories', indexUserHistories);
router.get('/histories/:id', getById);
// !! INI MAU DIBUAT YANG BISA HAPUS HANYA USER SENDIRI APA TIDAK?
router.delete('/histories/:id', getById);

export default router;
