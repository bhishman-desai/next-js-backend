import { NextResponse } from "next/server";

const DATA_SOURCE_URL: string = "https://jsonplaceholder.typicode.com/todos";

type Props = {
  params: {
    todoID: string;
  };
};

export const GET = async (request: Request, { params: { todoID } }: Props) => {
  const response: Response = await fetch(`${DATA_SOURCE_URL}/${todoID}`);
  const data: TODO = await response.json();

  if (!data.id) return NextResponse.json({ message: `TODO Not Found!` });

  return NextResponse.json(data);
};
