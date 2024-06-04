import httpStatus from 'http-status';
import sendResponse from '../../utils/sendREsponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicsemester.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  //data body theke niye asbe

  // const { password, student: studentData } = req.body;
  //zod validation
  // const zodParseData = UserValidation.parse(user);

  //will all service function to send this data
  const result = await AcademicSemesterServices.createAcademicSemesterintoDB(
    req.body,
  );
  //send response
  // res.status(200).json({
  //   success: true,
  //   message: 'student is created successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester  is created successfully',
    data: result,
  });
});
const getAllSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemesterfromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Successfully All semester',
    data: result,
  });
});
const getSingleSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleFacultFromDB(semesterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Successfully Specific semester',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemester,
  getSingleSemester,
};
