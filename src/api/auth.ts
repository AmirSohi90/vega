import { postFetch } from "../lib/facades/post";

type LoginApiResponse = {
  token: string;
  user: { email: string };
};

function loginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginApiResponse> {
  return postFetch("/auth/login", { email, password });
}

export { loginApi };
