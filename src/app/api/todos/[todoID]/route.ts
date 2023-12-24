import { NextResponse } from "next/server";

const DATA_SOURCE_URL: string = "https://jsonplaceholder.typicode.com/todos";

export const GET = async (request: Request) => {
  const id = request.url.split("/").at(-1) as string;

  const response: Response = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const data: TODO = await response.json();

  if (!data.id) return NextResponse.json({ message: `TODO Not Found!` });

  return NextResponse.json(data);
};
