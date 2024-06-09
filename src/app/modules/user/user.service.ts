import { object } from 'zod';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../student/student.model';
import { TAcademicSemester } from '../academicSemester/academicsemester.Interface';
import { AcademicSemester } from '../academicSemester/academicsemester.model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

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
  //start session
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //set generated id
    // if (!admissionSemester) {
    //   throw new Error('Admission semester not found');
    // }
    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester,
    );
    //create a user
    const newUser = await User.create([userData], { session }); //array
    //create a student
    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to create user');
    }
    //set id
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    //create a student transaction-2
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }

  // //set manualy id

  // //create a user
  // const newUser = await User.create(userData); //built in static method
  // //create  a student
  // if (Object.keys(newUser).length) {
  //   payload.id = newUser.id;
  //   payload.user = newUser._id;

  //   const newStudent = await Student.create(payload);
  //   return newStudent;
  // }

  // const student = new Student(studentData); //create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save();
};
const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};
export const userServices = {
  createStudenttoDB,
  getAllUsersFromDB,
};
