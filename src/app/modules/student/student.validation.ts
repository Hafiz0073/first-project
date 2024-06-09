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
    password: z.string().max(20),
    student: z.object({
      name: nameSchemaValidation,
      gender: z.enum(['male', 'female', 'others']),
      dateofBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'AB+', 'O+', 'O-']).optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchemaValidation,
      localGuardian: localGuardianSchemaValidation,
      profileImage: z.string().url().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});
//update data validation
const updateNameSchemaValidation = z.object({
  firstName: z.string().max(15).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

// Define the Zod schema for Guardian
const updateGuardianSchemaValidation = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContact: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContact: z.string().optional(),
});

// Define the Zod schema for LocalGuardian
const updateLocalGuardianSchemaValidation = z.object({
  localGuardianName: z.string().optional(),
  localGuardianOccupation: z.string().optional(),
  localGuardianContact: z.string().optional(),
});

// Define the Zod schema for Student
export const updateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: updateNameSchemaValidation,
      gender: z.enum(['male', 'female', 'others']),
      dateofBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'AB+', 'O+', 'O-']).optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianSchemaValidation,
      localGuardian: updateLocalGuardianSchemaValidation,
      profileImage: z.string().url().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
