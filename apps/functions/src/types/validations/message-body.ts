import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const schema = z.object({
  author: z.string().min(3).max(200, "invalid size"),
  body: z.string().max(200, "invalid size"),
});

export const messageBody = zValidator("json", schema);
