"use server";

import { Message } from "@/lib/types/message";

export async function getMessages(): Promise<Message[]> {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const response = await fetch(`${process.env.API_URL}/messages`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return [];
  }
  const result =
    (await response
      .json()
      .then((v) => v as Message[])
      .catch((err) => {
        console.log(err);
      })) ?? [];

  return result;
}
