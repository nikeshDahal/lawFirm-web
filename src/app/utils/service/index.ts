import { getByPath } from "../helper";

interface FetchDataArgs<V = Record<string, any>> {
  path?: string | null;
  query: string;
  variables?: V;
  cache?: RequestCache;
  revalidate?: number | false;
}

const fetchData = async <T = unknown, V = Record<string, any>>({
  path = null,
  query,
  variables,
  cache,
  revalidate = 60, // Default to 60s ISR
}: FetchDataArgs<V>): Promise<T> => {
  const fetchOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  if (cache) {
    fetchOptions.cache = cache;
  } else if (revalidate !== undefined && revalidate !== false) {
    fetchOptions.next = { revalidate };
  } else if (!cache) {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(
    (process.env.NEXT_API as string) || (process.env.NEXT_PUBLIC_API as string),
    fetchOptions,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (path ? getByPath(data, path) : data) as T;
};

export { fetchData };
