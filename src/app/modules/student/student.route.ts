import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller function

router.get('/', StudentControllers.getallStudent);
router.get('/:studentId', StudentControllers.getSingleStudent);
export const studentRoutes = router;
