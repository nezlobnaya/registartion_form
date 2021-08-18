import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import recordsRoutes from "./routes/records/records.js";
import  path, { dirname } from "path";
import { fileURLToPath } from "url";
import jwt from "express-jwt";
import jwks from "jwks-rsa";

dotenv.config();

const server = express();

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-3wmnvfhu.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://registration-api.com',
  issuer: 'https://dev-3wmnvfhu.us.auth0.com/',
  algorithms: ['RS256']
})

server.use(bodyParser.json({  exceeded: true }));
server.use(bodyParser.urlencoded({  extended: true }));
server.use(cors());
// server.use(jwtCheck);





server.use('/api', recordsRoutes )


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, '../client/build')));

        // Handle React routing, return all requests to React app
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}


const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`Mongo Connection successful. Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
// 
mongoose.set('useFindAndModify', false);
