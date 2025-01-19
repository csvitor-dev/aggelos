import { Message } from "@/lib/types/message";
import { messageSchema } from "@/lib/validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const target = await request
    .json()
    .then((v) => v as Message[])
    .catch((err) => console.log(err));

  if (!target) {
    return NextResponse.json(
      { error: "request body unexpected format" },
      { status: 400 }
    );
  }
  const result = await messageSchema.safeParseAsync(target);

  if (result.error) {
    console.log(result.error);
    return NextResponse.json(
      { error: "Parse to target type `Message` fail" },
      { status: 400 }
    );
  }

  const response = await fetch(`${process.env.API_URL}/messages`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(target),
  }).catch((err) => console.log(err));

  if (!response || !response.ok) {
    return NextResponse.json({ error: "Fail to post data" }, { status: 500 });
  }
  const data = (await response.json()) as { id: number };

  return NextResponse.json(data, { status: 201 });
}
