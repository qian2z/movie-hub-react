import languages from "../data/languages";

export interface Language {
  iso_639_1: string;
  english_name: string;
}

// const useLanguages = () => useData<Language>("/configuration/languages");
const useLanguages = () => ({
  data: languages.sort(
    (a: { english_name: string }, b: { english_name: string }) =>
      a.english_name.localeCompare(b.english_name)
  ),
  error: null,
  isLoading: false,
});

export default useLanguages;
