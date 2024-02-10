import { z } from 'zod';

export const ExampleValidation = z.object({
  username: z.string().min(1)
});