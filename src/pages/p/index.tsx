import { useEffect, useState } from "react";
import { MovieData } from "../api/dummy";
import MovieCard from "@/components/MovieCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAsc, faSortDesc } from '@fortawesome/free-solid-svg-icons'

type SortKey = | 'Title' | 'Year' | 'Price';

const PageView = () => {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [sort, setSort] = useState<SortKey>("Title");
  const [ascending, setAscending] = useState<boolean>(true);

  const sorting: Record<SortKey, (a: MovieData, b: MovieData) => number> = {
    "Title": (a, b) => ascending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title),
    "Year": (a, b) => ascending ? a.year - b.year : b.year - a.year,
    "Price": (a, b) => ascending ? a.price - b.price : b.price - a.price,
  };

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
      {movies && movies.sort(sorting[sort]).map((data, index) => <MovieCard key={index} data={data} />)}
    </div>
  )

  return (
    <div className="z-10 max-w-5xl w-full items-center flex-col space-y-5 font-mono text-sm ">
      <div className="flex justify-between">
        <div>Page view</div>
        {!loading &&
          <div className="flex space-x-4 items-center">
            <div>Sort by:</div>
            <select className="text-white bg-gray-800 p-1 rounded" value={sort} onChange={(e) => {
              setSort(e.target.value as SortKey)
            }}>
              <option value="Title">Title</option>
              <option value="Year">Year</option>
              <option value="Price">Price</option>
            </select>
            <FontAwesomeIcon
              className="hover:cursor-pointer p-1"
              icon={ascending ? faSortAsc : faSortDesc}
              onClick={() => {
                setAscending(!ascending)
              }} />
          </div>
        }
      </div>

      {loading ? <Loading /> : <Loaded />}
    </div>
  );
}

export default PageView;
