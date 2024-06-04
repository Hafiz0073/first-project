import { Schema, model } from 'mongoose';

import { TAcademicSemester } from './academicsemester.Interface';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicsemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },

    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
    },
    endMonth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('semester already exist ');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

//user password make #
// UserSchema.post('save', async function (doc, next) {
//   const user = this;
//   //hashing password and save into db
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });
// //post save middleware hook
// UserSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });
