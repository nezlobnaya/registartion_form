import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import recordsRoutes from "./routes/records/records.js";
import  path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const server = express();

server.use(bodyParser.json({  exceeded: true }));
server.use(bodyParser.urlencoded({  extended: true }));
server.use(cors());



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