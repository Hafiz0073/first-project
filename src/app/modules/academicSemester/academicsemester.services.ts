import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TAcademicSemester } from './academicsemester.Interface';
import { academicSemesterNameCodeMapper } from './academicsemester.constant';
import { AcademicSemester } from './academicsemester.model';

const createAcademicSemesterintoDB = async (payLoad: TAcademicSemester) => {
  //semester code checking

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'semester already exist in this year',
    );
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};
//get all semester
const getAllSemesterfromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};
//singel faculty
const getSingleSemesterFromDB = async (_id: string) => {
  const result = await AcademicSemester.findById({ _id });
  return result;
};
export const AcademicSemesterServices = {
  createAcademicSemesterintoDB,
  getAllSemesterfromDB,
  getSingleFacultFromDB: getSingleSemesterFromDB,
};
