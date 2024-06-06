import { useEffect, useState } from "react";
import { MovieData } from "../api/dummy";

const PageView = () => {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/dummy")
      const json = await data.json()
      console.log(json)
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
    <div>
      Loaded
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
