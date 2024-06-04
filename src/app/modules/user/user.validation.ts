import { z } from 'zod';

const UserValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .max(20, { message: 'password must be 20 characters' })
    .optional(),
});
export const UserValidation = {
  UserValidationSchema,
};
