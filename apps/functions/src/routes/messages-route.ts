import { Hono } from "hono";
import type { Env } from "@/types/bindings";
import { MessagesController } from "@/controllers/messages-controller";
import { messageBody } from "@/types/validations/message-body";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const controller = new MessagesController(c);
  const result = await controller
    .getMessages()
    .catch((err: Error) => c.json({ error: err.message }, 500));

  return c.json(result);
});

app.post("/", messageBody, async (c) => {
  const target = c.req.valid("json");
  const controller = new MessagesController(c);

  const result = await controller
    .createMessage(target)
    .catch((err: Error) => c.json({ error: err.message }, 400));

  return c.json(result);
});

export default app;
