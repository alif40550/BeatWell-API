import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const userResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});
