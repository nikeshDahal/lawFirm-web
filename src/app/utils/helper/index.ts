const getByPath = (obj: undefined, path: string) =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);

export { getByPath };
