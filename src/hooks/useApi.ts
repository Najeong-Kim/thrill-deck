import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";

export function useApi<T>(endpoint: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const proxyUrl = `/api/proxy?url=${encodeURIComponent(endpoint)}`;

  useEffect(() => {
    let cancelled = false;

    fetcher<T>(proxyUrl, options)
      .then((res) => {
        if (!cancelled) {
          setData(res);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [options, proxyUrl]);

  return { data, error, loading };
}
