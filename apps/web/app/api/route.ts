import { Message } from "@/lib/types/message";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.API_URL}/messages`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "Request failed",
      },
      { status: 500 }
    );
  }
  const result = await response
    .json()
    .then((v) => v as Message[])
    .catch((err) => {
      console.log(err);
    });

  if (!result) {
    return NextResponse.json(
      {
        error: "parse for `Message[]` was not possible",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(result);
}
