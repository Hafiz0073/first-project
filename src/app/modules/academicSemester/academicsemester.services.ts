import { TAcademicSemester } from './academicsemester.Interface';
import { academicSemesterNameCodeMapper } from './academicsemester.constant';
import { AcademicSemester } from './academicsemester.model';

const createAcademicSemesterintoDB = async (payLoad: TAcademicSemester) => {
  //semester code checking

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('semester already exist in this year');
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};
export const AcademicSemesterServices = {
  createAcademicSemesterintoDB,
};
