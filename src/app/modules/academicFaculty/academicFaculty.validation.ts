import { z } from 'zod';
const createAcademicFacultyValidationshema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
  }),
});
const updateAcademicFacultyValidationshema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
  }),
});
export const facultyValidation = {
  createAcademicFacultyValidationshema,
  updateAcademicFacultyValidationshema,
};
