import { Message } from "@/lib/types/message";

export async function getMessages(): Promise<Message[]> {
  const response = await fetch(
    "https://functions.csvitor-dev.workers.dev/messages"
  );

  if (!response.ok) {
    return [];
  }
  const result = await response
    .json()
    .then((v) => v as Message[])
    .catch((err) => {
      console.log(err);
    });

  if (!result) {
    return [];
  }

  return result;
}
