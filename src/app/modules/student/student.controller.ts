import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import globalErrorHandlers from '../../middlewares/globalErrorHandlers';
import catchAsync from '../../utils/catchAsync';

const getallStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudensFromDB();
  res.status(200).json({
    success: true,
    message: 'student find successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    status: true,
    message: 'single student found',
    data: result,
  });
});
export const StudentControllers = {
  getallStudent,
  getSingleStudent,
};
