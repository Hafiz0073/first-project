// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//call student routes
app.use('/api/v1/students', studentRoutes);

const getaController = (req: Request, res: Response) => {
  const a = 2;

  res.send({ a });
};

app.get('/', getaController);

console.log(process.cwd());

export default app;
