import { Hono } from "hono";
import type { Env } from "@/types/bindings";
import { MessageController } from "@/controllers/messages-controller";
import { messageBody } from "@/types/validations/message-body";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const controller = new MessageController(c);

  const result = await controller
    .getAll()
    .catch((err: Error) => c.json({ error: err.message }, 500));

  return c.json(result);
});

app.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const controller = new MessageController(c);

  const result = await controller
    .getById(id)
    .catch((err: Error) => c.json({ error: err.message }, 404));

  return c.json(result);
});

app.post("/", messageBody, async (c) => {
  const message = c.req.valid("json");
  const controller = new MessageController(c);

  const result = await controller
    .create(message)
    .catch((err: Error) => c.json({ error: err.message }, 400));

  return c.json(result);
});

export default app;
