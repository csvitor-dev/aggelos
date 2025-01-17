import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ id: 1, author: "Nomen Nescio", body: "Lorem Ipsum" });
});

export default app;
