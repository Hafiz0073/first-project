import { Student } from './student.interface';
import { StudentModel } from './student.module';

const createStudenttoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudensFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};
export const studentServices = {
  createStudenttoDB,
  getAllStudensFromDB,
  getSingleStudentFromDB,
};
