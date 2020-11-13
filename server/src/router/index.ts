import express from 'express';
import login from './user/Login';
import register from './user/Register';
import createRecord from './record/CreateRecord';

const router = express.Router();

router.use('/api', register);
router.use('/api', login);
router.use('/api', createRecord);

export default router;
