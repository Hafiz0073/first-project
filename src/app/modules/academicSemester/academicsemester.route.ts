import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { AcademicSemesterController } from './academicsemester.controllers';
import { AcademicSemesterValidation } from './academicsemester.validation';

const router = express.Router();

//will call controller function

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

export const academicSemesterRoutes = router;
