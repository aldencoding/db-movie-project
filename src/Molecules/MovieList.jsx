//Component
import SMovieList from "./Skeletons/SMovieList";

function MovieList({ title, map, isLoading }) {
  console.log(isLoading);
  return (
    <div>
      <div className=" mb-14 mx-5 mt-10 flex flex-col gap-4">
        <h1 className="font-oswald text-white text-2xl ">{title}</h1>
        <ul className="flex flex-nowrap gap-4 overflow-x-scroll ">
          {map}
          {!isLoading && (
            <li className="p-8 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-16"
                fill="#e8eaed"
              >
                <path d="M507-480 384-357l56 57 180-180-180-180-56 57 123 123ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <p className="text-xl text-white">More</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
