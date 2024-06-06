import { MovieData } from "@/pages/api/dummy";
import { FC } from "react";

interface MovieCardProps {
  data: MovieData;
}

const MovieCard: FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="flex justify-between p-2 rounded-md bg-slate-900">
      <div>{data.title}</div>
      <div className="flex space-x-16">
        <div>{data.year}</div>
        <div>{data.price}</div>
      </div>
    </div>
  )
}

export default MovieCard;
