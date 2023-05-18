import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          if (res.data.results) {
            setData(res.data.results);
          } else if (res.data.genres) {
            setData(res.data.genres);
          } else {
            const languages = res.data;
            setData(
              languages.sort(
                (a: { english_name: string }, b: { english_name: string }) =>
                  a.english_name.localeCompare(b.english_name)
              )
            );
          }
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
