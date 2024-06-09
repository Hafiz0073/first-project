import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { facultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

//will call controller function

router.post(
  '/create-academic-faculty',
  validateRequest(facultyValidation.createAcademicFacultyValidationshema),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(facultyValidation.updateAcademicFacultyValidationshema),
  AcademicFacultyControllers.getupdateFaculty,
);
router.get('/', AcademicFacultyControllers.getAllFaculties);
router.get('/:facultyId', AcademicFacultyControllers.getSingleFaculty);

export const academicFacultyRoutes = router;
