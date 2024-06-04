import { AcademicFaculty } from './academicFaculty.model';

const getAllFacultyfromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
export const AcademicFacultyService = {
  getAllFacultyfromDB,
  getSingleFacultyFromDB,
};
