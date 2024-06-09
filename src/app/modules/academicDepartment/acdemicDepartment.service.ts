import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepertment.model';

const createAcademicDepartmentfromDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};
const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicfaculty');
  return result;
};
const getSingleAcademicDepartmentintoDB = async (id: string) => {
  const result = await AcademicDepartment.findOne({ _id: id }).populate(
    'academicfaculty',
  );
  return result;
};
const updateAcademicDepartmentintoDb = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentfromDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentintoDB,
  updateAcademicDepartmentintoDb,
};
