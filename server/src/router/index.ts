import express from 'express';
import login from './user/Login';
import register from './user/Register';

const router = express.Router();

router.use('/api', register);
router.use('/api', login);

export default router;
