import { NextResponse } from "next/server";

const DATA_SOURCE_URL: string = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export const GET = async (request: Request) => {
  const response: Response = await fetch(DATA_SOURCE_URL);
  const data: TODO[] = await response.json();

  return NextResponse.json(data);
};

export const POST = async (request: Request) => {
  /* request.json() gets the data from the body */
  const { userId, title }: Partial<TODO> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: `Incomplete Data` });

  /* Perform the post operation over the id with your secret key stored in .env.local */

  /* So in this case, we are calling a post-method assuming that API_KEY is our secret key to delete from DATA_SOURCE_URL */
  const response: Response = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false } as TODO),
  });

  const data = await response.json();

  return NextResponse.json(data);
};

export const PUT = async (request: Request) => {
  /* request.json() gets the data from the body */
  const { userId, id, title, completed }: TODO = await request.json();

  if (!userId || !id || !title)
    return NextResponse.json({ message: `Incomplete Data` });

  /* Perform the put operation over the id with your secret key stored in .env.local */

  /* So in this case, we are calling a post-method assuming that API_KEY is our secret key to delete from DATA_SOURCE_URL */
  const response: Response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({ userId, title, completed } as TODO),
  });

  const data = await response.json();

  return NextResponse.json(data);
};

export const DELETE = async (request: Request) => {
  /* request.json() gets the data from the body */
  const { id }: Partial<TODO> = await request.json();

  if (!id) return NextResponse.json({ message: `${id} is not a valid ID` });

  /* Perform the delete operation over the id with your secret key stored in .env.local */

  /* So in this case, we are calling a delete method assuming that API_KEY is our secret key to delete from DATA_SOURCE_URL */
  const response: Response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
  });

  return NextResponse.json({
    message: `Todo with id = ${id} deleted successfully`,
  });
};
