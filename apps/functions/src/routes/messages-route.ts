import { Hono } from "hono";
import type { Env } from "../types/bindings";
import { MessagesController } from "../controllers/messages-controller";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const controller = new MessagesController(c);
  const result = await controller.getMessages();

  return c.json(result);
});

export default app;
