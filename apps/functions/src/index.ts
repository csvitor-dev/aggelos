import { Hono } from "hono";
import { appCors } from "./middlewares/app-cors";
import messagesRoute from "./routes/messages-route";

const app = new Hono();

app.use("*", appCors());

app.get("/", (c) => {
  return c.json({ api: "health check" });
});

app.route("/messages", messagesRoute);

export default app;
