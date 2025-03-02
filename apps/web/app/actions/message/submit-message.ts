"use server";

import { Message } from "@/lib/types/message";
import { messageSchema } from "@/lib/validator";

export async function submitMessage(target: Message) {
  const result = await messageSchema.safeParseAsync(target);

  if (result.error) {
    console.error(result.error);
    return;
  }

  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const response = await fetch(`${process.env.API_URL}/messages`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result.data),
  }).catch((err) => console.log(err));

  if (!response?.ok) {
    console.error("request was unsuccessful");
  }
}
