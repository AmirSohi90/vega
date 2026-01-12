import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HomePage } from "../Homepage";

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe("HomePage", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("renders the Get Started action link", () => {
    renderHomePage();

    expect(
      screen.getByRole("link", { name: /get started/i })
    ).toBeInTheDocument();
  });

  it("links to my-account when the user is not logged in", () => {
    localStorage.removeItem("token");

    renderHomePage();

    const link = screen.getByRole("link", { name: /get started/i });
    expect(link).toHaveAttribute("href", "/my-account");
  });

  it("links to /login when the user is logged in", () => {
    localStorage.setItem("token", "fake-token");

    renderHomePage();

    const link = screen.getByRole("link", { name: /get started/i });
    expect(link).toHaveAttribute("href", "/login");
  });
});
