import { NextResponse } from "next/server";

export const middleware = async (request: Request) => {
  return NextResponse.next();
};

/* This will filter requests only from the api folder (backend requests only) */
export const config = {
  matcher: "/api/:path*",
};
