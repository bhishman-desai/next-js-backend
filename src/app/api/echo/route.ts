import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  /* Will work for any params now */
  return NextResponse.json(Object.fromEntries(searchParams.entries()));
};
