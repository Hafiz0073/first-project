// const express = require('express')
import express, { Application, Request, Response } from 'express';

import cors from 'cors';

import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//call student routes
app.use('/api/v1/', router);

const test = (req: Request, res: Response) => {
  // throw new Error('new error test');//for manual test
  const a = 2;

  res.send({ a });
};

app.get('/', test);
app.use(globalErrorHandlers);
app.use(notFound);

// console.log(process.cwd());

export default app;
