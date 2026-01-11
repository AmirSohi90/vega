type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

function getFetch<T extends QueryParams>({
  url,
  params,
}: {
  url: string;
  params: T;
}) {
  const qs = new URLSearchParams(
    filterNullAndUndefinedParams(params)
  ).toString();

  return fetch(`${url}${qs}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

function filterNullAndUndefinedParams(params: QueryParams) {
  return Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => [k, String(v)]);
}

export { getFetch };
