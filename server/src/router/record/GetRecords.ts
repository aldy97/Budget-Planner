import express from 'express';
import getRecords from '../../controller/record/GetRecords';

const router = express.Router();

router.get('/getRecords', getRecords);

export default router;
