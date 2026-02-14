import { getByPath } from "../helper";

interface FetchDataArgs<V = Record<string, any>> {
  path?: string | null;
  query: string;
  variables?: V;
  cache?: "no-cache" | "force-cache" | "default" | "no-store";
}
const fetchData = async <T = unknown, V = Record<string, any>>({
  path = null,
  query,
  variables,
  cache = "default",
}: FetchDataArgs<V>): Promise<T> => {
  const res = await fetch(
    (process.env.NEXT_API as string) || (process.env.NEXT_PUBLIC_API as string),
    {
      cache,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (path ? getByPath(data, path) : data) as T;
};

export { fetchData };
