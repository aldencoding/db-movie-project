import { useEffect, useState } from "react";
import SMovieList from "../Molecules/Skeletons/SMovieList";
import { getPopularMoviesList, getNowPlaying } from "../api";
import { useNavigate } from "react-router-dom";
import MovieList from "../Molecules/MovieList";
const env = import.meta.env;

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isScroll, setIsScroll] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  addEventListener("scroll", () => {
    if (window.scrollY > 35) {
      return setIsScroll("scale-125 transition duration-500");
    } else {
      return setIsScroll("scale-100 transition duration-300");
    }
  });

  // window.onscroll = function () {
  //   console.log("ha");
  // };

  useEffect(() => {
    getPopularMoviesList().then((result) => {
      setPopularMovies(result);
      setIsLoading(false);
      console.log(result);
    });
    // getNowPlaying().then((result) => {
    //   console.log(result);
    //   setNowPlaying(result);
    // });
  }, []);

  return (
    <div className="">
      <div className="pt-5 relative overflow-hidden">
        {popularMovies
          .map((data) => (
            <img
              className={`${isScroll} ease-in absolute w-full h-full top-0 -z-10 opacity-60 overflow-hidden`}
              key={data.id}
              src={`${env.VITE_IMG_URL}/${data.backdrop_path}`}
            />
          ))
          .splice(2, 1)}
        {/* <img
          src="https://wallpapercave.com/wp/wp6538844.jpg"
          className={`${isScroll} ease-in absolute h-full top-0 -z-10 opacity-75`}
        /> */}
        <div className="mx-5 flex flex-col text-white h-40">
          <h1 className="text-4xl font-oswald font-bold mb-2 mt-2">HOLA!</h1>
          <p className="text-3xl font-oswald">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="flex flex-row items-center mx-5 my-5 relative">
          <input
            type="text"
            className="w-full h-10 pl-3 rounded-2xl border-r-2"
            placeholder="What's Your Favorite Movie?"
          />
          <button className="absolute h-10 rounded-2xl p-2 right-0">
            Search 🔍
          </button>
        </div>
      </div>
      {/* Movie List Start */}
      <MovieList
        title={"Trending 🔥"}
        isLoading={isLoading}
        map={
          !isLoading ? (
            popularMovies
              .map((data) => (
                <li className="min-w-36" key={data.id}>
                  <a
                    onClick={() => {
                      navigate("movie-details");
                    }}
                  >
                    <img
                      className="rounded-xl"
                      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    />
                  </a>
                </li>
              ))
              .slice(0, 10)
          ) : (
            <SMovieList />
          )
        }
      />
    </div>
  );
}
