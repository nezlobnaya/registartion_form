import express from "express";
import { getRecords, createRecord, updateRecord, deleteRecord } from "../../controllers/index.js"
const router = express.Router();

router.get('/records', getRecords);
router.post('/records', createRecord);
router.patch('/records/:id', updateRecord);
router.delete('/records/:id', deleteRecord);

export default router;

