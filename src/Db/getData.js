import "server-only";

const movies = {
  moviesData: () => import("./data.json").then((module) => module.default),
};

export const getMovies = async () => movies["moviesData"]();
export const getMovieById = async (id) => {
  const movies = await getMovies();
  return movies.results.find((movie) => movie.id == id);
};
