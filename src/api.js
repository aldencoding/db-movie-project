import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjVlOTM1NzIzOTAyMmE2NWQ3OGRmZTNmNGQzYjg4NyIsIm5iZiI6MTcyMDIzNjUyMS45MDg3NSwic3ViIjoiNjU2NmU2YzQ4OWQ5N2YwMGZlN2M5NWI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mqZGjk6fZ4AdHA0Lyp5tYv8lCLlgZPnjvyj-F9M5Yb0",
  },
};

export const getPopularMoviesList = async () => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      options
    );
    return movie.data.results;
  } catch (error) {
    console.log(`data gagal diambil karena ${error}`);
  }
};

export const getNowPlaying = async () => {
  try {
    const nowPlaying = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      options
    );
    return nowPlaying.data.results;
  } catch (error) {
    console.log(`data terdapat kesalahan ${error}`);
  }
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=365e9357239022a65d78dfe3f4d3b887`
  );

  return search.data;
};
