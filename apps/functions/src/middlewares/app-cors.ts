import { cors } from "hono/cors";

export const appCors = () => {
  return cors({
    origin: "*",
    allowMethods: ["POST", "GET", "OPTIONS"],
  });
};
