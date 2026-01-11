import axios from "axios";

function postFetch<TResponse, TBody>(
  url: string,
  body: TBody
): Promise<TResponse> {
  return axios
    .post<TResponse>(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
}

export { postFetch };
