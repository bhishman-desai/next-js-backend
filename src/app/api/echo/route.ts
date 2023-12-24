import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const course = searchParams.get("course");

  return NextResponse.json({ name, course });
};
