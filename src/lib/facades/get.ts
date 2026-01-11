import axios from "axios";

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

function getAxios<TResponse, TParams extends QueryParams>({
  url,
  params,
}: {
  url: string;
  params: TParams;
}): Promise<TResponse> {
  return axios
    .get<TResponse>(url, {
      params: filterNullAndUndefinedParams(params),
      headers: {
        "Content-Type": "application/json",
      },
      paramsSerializer: (params) =>
        new URLSearchParams(params as Record<string, string>).toString(),
    })
    .then((res) => res.data);
}

function filterNullAndUndefinedParams(params: QueryParams) {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([, v]) => v !== undefined && v !== null)
      .map(([k, v]) => [k, String(v)])
  );
}

export { getAxios };
