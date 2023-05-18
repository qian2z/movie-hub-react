import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
}

// const useGenres = () => useData<Genre>("/genre/movie/list");
const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
