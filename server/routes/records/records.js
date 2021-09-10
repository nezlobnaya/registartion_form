import express from "express";
import { getRecords, getRecord, createRecord, updateRecord, deleteRecord } from "../../controllers/index.js"
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

const router = express.Router();

const jwtCheck = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-3wmnvfhu.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://registration-api.com',
  issuer: 'https://dev-3wmnvfhu.us.auth0.com/',
  algorithms: ['RS256']
});

router.get('/records', jwtCheck, getRecords);
router.get('/records/:id',jwtCheck, getRecord);
router.post('/records', createRecord);
router.patch('/records/:id', jwtCheck, updateRecord);
router.delete('/records/:id', jwtCheck, deleteRecord);

export default router;

