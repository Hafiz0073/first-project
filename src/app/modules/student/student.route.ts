import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

//will call controller function

router.get('/', StudentControllers.getallStudent);
// router.patch(
//     '/:studentId',
//     validateRequest(updateStudentValidationSchema),
//     StudentControllers.updateStudent,
//   );
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);
export const studentRoutes = router;
