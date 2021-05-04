import express from "express";
import { getRecords, createRecord,  deleteRecord } from "../../controllers/index.js"
const router = express.Router();

router.get('/', getRecords);
router.post('/create', createRecord);
router.delete('/:id', deleteRecord);

export default router;

