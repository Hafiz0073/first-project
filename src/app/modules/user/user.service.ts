import { object } from 'zod';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/student.model';
import { TAcademicSemester } from '../academicSemester/academicsemester.Interface';
import { AcademicSemester } from '../academicSemester/academicsemester.model';
import { generateStudentId } from './user.utils';

const createStudenttoDB = async (password: string, payload: TStudent) => {
  //custom static method
  //   if (await User.isUserExists(studentData.id)) {
  //     throw new Error('user already exists');
  //   }
  //new user
  const userData: Partial<TUser> = {};
  //if user not provide password
  userData.password = password || (config.default_password as string);
  // if (!password) {
  //   password = config.default_password as string;
  // }
  //set user role
  userData.role = 'student';
  //create autogenerate student id
  // console.log(payload, password);

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  //set manualy id
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }
  userData.id = await generateStudentId(admissionSemester);

  //create a user
  const newUser = await User.create(userData); //built in static method

  //create  a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }

  // const student = new Student(studentData); //create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save();
};
export const userServices = {
  createStudenttoDB,
};
