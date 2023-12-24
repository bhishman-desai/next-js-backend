import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export const POST = async (request: Request) => {
  /* request.json() gets the data from the body */
  const bodyData: Feedback = await request.json();

  /* Once we get the bodyData, we can perform operations like storing it in a database over here */

  const { name, email, message } = bodyData;

  return NextResponse.json({ name, email, message });
};
