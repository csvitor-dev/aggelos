import { z } from "zod";

export const messageSchema = z.object({
  id: z.number(),
  author: z.string().min(3).max(200),
  body: z.string().min(3).max(200),
});
