import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, Uname } from './student.interface';

const nameSchema = new Schema<Uname>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherContact: { type: String, required: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  localGuardianName: { type: String, required: true },
  localGuardianOccupation: { type: String, required: true },
  localGuardianContact: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: nameSchema,
  gender: ['male', 'female'],
  dateofBirth: String,
  email: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'A-', 'AB+', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: String,
  isAtive: ['Active', 'inActive'],
});

//model
export const StudentModel = model<Student>('Student', studentSchema);
