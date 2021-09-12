import express from "express";
import { getRecords, getRecord, createRecord, updateRecord, deleteRecord } from "../../controllers/index.js"
import jwtCheck from "../../auth/authorizeAccessToken.js";

const router = express.Router();


router.get('/records', jwtCheck, getRecords);
router.get('/records/:id',jwtCheck, getRecord);
router.post('/records', createRecord);
router.patch('/records/:id', jwtCheck, updateRecord);
router.delete('/records/:id', jwtCheck, deleteRecord);

export default router;

