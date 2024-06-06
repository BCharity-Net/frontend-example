import { useEffect, useState } from "react";
import { MovieData } from "../api/dummy";
import MovieCard from "@/components/MovieCard";

const PageView = () => {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/dummy")
      const json = await data.json()
      setMovies(json)
      setLoading(false)
    }

    fetchData();
  }, []);

  const Loading = () => (
    <div>
      Loading...
    </div>
  )

  const Loaded = () => (
    <div className="flex-col space-y-2 p-2 rounded-md bg-slate-800">
      {movies && movies.map((data, index) => <MovieCard key={index} data={data} />)}
    </div>
  )

  return (
    <div className="z-10 max-w-5xl w-full items-center flex-col space-y-5 font-mono text-sm ">
      <div>
        Page view
      </div>

      {loading ? <Loading /> : <Loaded />}
    </div>
  );
}

export default PageView;
