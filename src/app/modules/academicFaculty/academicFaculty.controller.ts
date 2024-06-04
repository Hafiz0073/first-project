import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';

const getAllFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllFacultyfromDB();
  return result;
});
