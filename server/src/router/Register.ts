import express, { Request, Response } from 'express';
import checkRegister from '../controller/Register';

const router = express.Router();

router.post('/register', checkRegister);

export default router;
