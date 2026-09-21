import cors from 'cors';
import express from 'express';
import apiRouter from './routes/api.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);