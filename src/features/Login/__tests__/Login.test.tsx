import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Login } from "../Login";

const navigateMock = vi.fn();

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const setIsLoadingMock = vi.fn();
vi.mock("../../../context/LoadingContext/useLoading", () => ({
  useLoading: () => ({ setIsLoading: setIsLoadingMock }),
}));

const loginApiMock = vi.fn();
vi.mock("../../../api/auth", () => ({
  loginApi: (args: { email: string; password: string }) => loginApiMock(args),
}));

function renderLogin() {
  return render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
}

describe("Login", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    setIsLoadingMock.mockReset();
    loginApiMock.mockReset();
    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("submits email/password, sets token, and navigates on success", async () => {
    const user = userEvent.setup();
    loginApiMock.mockResolvedValueOnce({ token: "abc123" });

    renderLogin();

    await user.type(screen.getByPlaceholderText(/email/i), "test@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "secret");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(setIsLoadingMock).toHaveBeenCalledWith(true);

    expect(loginApiMock).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret",
    });

    await waitFor(() => {
      expect(localStorage.getItem("token")).toBe("abc123");
      expect(navigateMock).toHaveBeenCalledWith("/my-account");
    });

    await waitFor(() => {
      expect(setIsLoadingMock).toHaveBeenCalledWith(false);
    });
  });

  it("shows an error message on failure and stops loading", async () => {
    const user = userEvent.setup();
    loginApiMock.mockRejectedValueOnce({
      response: { data: { message: "Invalid credentials" } },
    });

    renderLogin();

    await user.type(screen.getByPlaceholderText(/email/i), "bad@example.com");
    await user.type(screen.getByPlaceholderText(/password/i), "wrong");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(setIsLoadingMock).toHaveBeenCalledWith(true);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Invalid credentials"
    );

    expect(navigateMock).not.toHaveBeenCalled();
    expect(localStorage.getItem("token")).toBeNull();

    await waitFor(() => {
      expect(setIsLoadingMock).toHaveBeenCalledWith(false);
    });
  });
});
