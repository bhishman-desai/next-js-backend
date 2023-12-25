import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV == "production"
    ? [
        /* Origins which should be allowed in production */
      ]
    : [
        /* Origins which should be allowed in development */
        "http://localhost:3000",
        "https://bhishman.vercel.app",
        "https://www.google.com",
      ];

export const middleware = async (request: Request) => {
  const origin = request.headers.get("origin");

  /* If the current origin is not in the allowedOrigins array, return null response */
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400 /* CORS Error */,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return NextResponse.next();
};

/* This will filter requests only from the api folder (backend requests only) */
export const config = {
  matcher: "/api/:path*",
};
