import { Message } from "../types/message";
import { messageSchema } from "../validator";

export async function postMessage(target: Message) {
  const result = await messageSchema.safeParseAsync(target);

  if (result.error) {
    console.log(result.error);
    return;
  }

  const response = await fetch(
    "https://functions.csvitor-dev.workers.dev/messages",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(target),
    }
  );

  if (!response.ok) {
    throw new Error("Fail to post data");
  }
}
