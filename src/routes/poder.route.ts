import { Router } from 'express';
import {
  getAllPoderesController,
  getPoderByIdController,
  createPoderController,
  updatePoderController,
  deletePoderController,
} from '../controllers/poder.controller';

const router = Router();

router.get('/', getAllPoderesController);
router.get('/:id', getPoderByIdController);
router.post('/', createPoderController);
router.put('/:id', updatePoderController);
router.delete('/:id', deletePoderController);

export default router;
