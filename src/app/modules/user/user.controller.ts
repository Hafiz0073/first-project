import httpStatus from 'http-status';
import sendResponse from '../../utils/sendREsponse';
import { userServices } from './user.service';
import { UserValidation } from './user.validation';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  //data body theke niye asbe

  const { password, student: studentData } = req.body;

  //zod validation
  // const zodParseData = UserValidation.parse(user);

  //will all service function to send this data
  const result = await userServices.createStudenttoDB(password, studentData);
  //send response
  // res.status(200).json({
  //   success: true,
  //   message: 'student is created successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is created successfully',
    data: result,
  });
});
const getAllUsers = catchAsync(async (req, res) => {
  const result = await userServices.getAllUsersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get All users Successfully',
    data: result,
  });
});

export const UserController = { createStudent, getAllUsers };
