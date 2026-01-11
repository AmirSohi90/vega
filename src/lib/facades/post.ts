function postFetch<TResponse, TBody>(
  url: string,
  body: TBody
): Promise<TResponse> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export { postFetch };
