import { z } from 'zod';

// Define the Zod schema for Uname
const nameSchemaValidation = z.object({
  firstName: z.string().max(15),
  middleName: z.string().optional(),
  lastName: z.string(),
});

// Define the Zod schema for Guardian
const guardianSchemaValidation = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContact: z.string(),
  motherName: z.string(),
  motherOccupation: z.string().optional(),
  motherContact: z.string(),
});

// Define the Zod schema for LocalGuardian
const localGuardianSchemaValidation = z.object({
  localGuardianName: z.string(),
  localGuardianOccupation: z.string(),
  localGuardianContact: z.string(),
});

// Define the Zod schema for Student
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: nameSchemaValidation,
      gender: z.enum(['male', 'female', 'others']),
      dateofBirth: z.string(),
      email: z.string().email(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'AB+', 'O+', 'O-']).optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchemaValidation,
      localGuardian: localGuardianSchemaValidation,
      profileImage: z.string().url().optional(),
      admissionSemester: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
