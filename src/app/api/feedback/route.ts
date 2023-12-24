import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export const POST = async (request: Request) => {
  const data: Feedback = await request.json();

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
};
