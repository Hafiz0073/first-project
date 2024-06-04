import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import globalErrorHandlers from '../../middlewares/globalErrorHandlers';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendREsponse';
import httpStatus from 'http-status';

const getallStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudensFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single student found',
    data: result,
  });
});
export const StudentControllers = {
  getallStudent,
  getSingleStudent,
};
