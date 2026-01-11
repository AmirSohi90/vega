import { http, HttpResponse, delay } from "msw";

const auth = [
  http.post("/auth/login", async ({ request }) => {
    await delay(500);

    const { email, password } = (await request.json()) as {
      email?: string;
      password?: string;
    };

    if (email === "demo@demo.com" && password === "password") {
      return HttpResponse.json({
        token: "mock-jwt-token",
        user: { email: "demo" },
        status: 200,
      });
    }

    return HttpResponse.json(
      { message: "Email: demo@demo.com, password: password" },
      { status: 401 }
    );
  }),
];

export { auth };
