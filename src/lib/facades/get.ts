import axios from "axios";

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;
type Headers = Record<string, string>;

function getAxios<
  TResponse,
  TParams extends QueryParams,
  THeaders extends Headers
>({
  url,
  params,
  headers,
}: {
  url: string;
  params: TParams;
  headers: THeaders;
}): Promise<TResponse> {
  return axios
    .get<TResponse>(url, {
      params: filterNullAndUndefinedParams(params),
      headers: {
        "Content-Type": "application/json",
        ...headers,
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
