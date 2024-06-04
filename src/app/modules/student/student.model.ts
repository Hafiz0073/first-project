import { Schema, Types, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUname,
} from './student.interface';

const nameSchema = new Schema<TUname>({
  firstName: { type: String, required: true, maxlength: 15 },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'lastName is required'] },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContact: { type: String, required: true },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  localGuardianName: { type: String, required: true },
  localGuardianOccupation: { type: String, required: true },
  localGuardianContact: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user is required'],
    unique: true,
    ref: 'User',
  },

  name: {
    type: nameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateofBirth: String,
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'A-', 'AB+', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImage: { type: String },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
//for creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

//creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };
//model

//middleware pre post
// studentSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: we will save ta data');
//   const user = this;
//   //hashing password
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_code),
//   );
//   next();
// });
// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   console.log(this, 'post hook: we  saved  data');
//   next();
// });

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
