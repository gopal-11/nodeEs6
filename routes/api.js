// backend/routes/api.js

import express from 'express';
import { addNumber, getAllNumbers } from '../controllers/NumberController';
console.log(addNumber, getAllNumbers);
const router = express.Router();

router.get('/numbers', getAllNumbers);
router.post('/numbers', addNumber);

export default router;
