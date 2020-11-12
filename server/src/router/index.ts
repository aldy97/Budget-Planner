import express from 'express';
import register from './Register';

const router = express.Router();

router.use('/api', register);

export default router;
