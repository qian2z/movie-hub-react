import { MovieQuery } from "../App";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const useMovies = (movieQuery: MovieQuery) => {
  const endPoint =
    movieQuery.searchText === undefined ? "/discover/movie" : "/search/movie";

  const configObj = {
    params: {
      with_genres: movieQuery.genre?.id,
      language: movieQuery.language?.iso_639_1,
      sort_by: movieQuery.sortOrder,
    },
  };

  const searchObj = {
    params: {
      query: movieQuery.searchText,
    },
  };

  const obj = movieQuery.searchText === undefined ? configObj : searchObj;

  return useData<Movie>(endPoint, obj, [movieQuery]);
};

export default useMovies;
