import { Schema, Types, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { ObjectId } from 'mongodb';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import notFound from '../../middlewares/notFound';

const acdemicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicfaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);
acdemicDepartmentSchema.pre('save', async function (next) {
  const isExistingDepartment = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isExistingDepartment) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department already exist! ');
  }
  next();
});
acdemicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isExistingDepartment = await AcademicDepartment.findOne(query);
  if (!isExistingDepartment) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department does not exist! ',
    );
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  acdemicDepartmentSchema,
);
