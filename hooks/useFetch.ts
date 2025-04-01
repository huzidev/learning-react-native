import { useEffect, useState } from "react";

export default function useFetch<T>(fetchFunction: () => Promise<T>,autoFetch = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      err instanceof Error ? err : new Error("Unknown error");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setData(null);
    setLoading(false);
    setError(null);
  }

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    reset,
  };
}
