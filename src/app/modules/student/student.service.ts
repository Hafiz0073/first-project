import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudensFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id });
  return result;
};
export const studentServices = {
  getAllStudensFromDB,
  getSingleStudentFromDB,
};
