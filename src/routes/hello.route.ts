//Criar pasta: src/routes/ 
//Criar um arquivo hello.route.ts

import { Router } from 'express';
import { helloController } 
from '../controllers/hello.controller';

const router = Router();
router.get('/', helloController);

export default router;
