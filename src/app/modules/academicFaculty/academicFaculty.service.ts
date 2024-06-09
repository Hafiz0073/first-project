import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFaculty = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};
const getAllFacultyfromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateFacultyFromDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload);
  return result;
};
export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllFacultyfromDB,
  getSingleFacultyFromDB,
  updateFacultyFromDB,
};
