import { z } from 'zod';
const createAcademicFacultyValidationshema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
  }),
});
export const facultyValidation = {
  createAcademicFacultyValidationshema,
};
