// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type MovieData = {
  title: string;
  year: number;
  price: number;
};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieData[]>,
) {
  const data: MovieData[] = []
  data.push({ title: "Iron Man", year: 2008, price: 14.99 });
  data.push({ title: "Spider-Man", year: 2002, price: 19.99 });
  data.push({ title: "Jaws", year: 1975, price: 10.99 });
  data.push({ title: "The Dark Knight Rises", year: 2012, price: 16.99 });
  data.push({ title: "Spirited Away", year: 2001, price: 15.99 });
  data.push({ title: "Rush Hour", year: 1998, price: 12.99 });

  await sleep(2000);

  res.status(200).json(data);
}
