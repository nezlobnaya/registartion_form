import express from "express";
import { getRecords, createRecord,  deleteRecord } from "../../controllers/index.js"
const router = express.Router();

router.get('/records', getRecords);
router.post('/records', createRecord);
router.delete('/records/:id', deleteRecord);

export default router;

