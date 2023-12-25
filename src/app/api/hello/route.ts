import { NextResponse } from "next/server";
import { limiter } from "@/app/api/config/limiter";

export async function GET() {
  /* We are removing the token count on each call by 1 */
  /* One thing to note here is that this limiter object can be accessed all over the project */
  const remainingTokens = limiter.removeTokens(1);
  const count = await remainingTokens;

  /* Once the user exceeds the request count, we throw an error instead of the response */
  if (count < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many Requests",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.json({ message: "Hello, Next.js!" });
}
