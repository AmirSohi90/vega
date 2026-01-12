import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Navbar } from "../Navbar";

function renderNavbar() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
}
describe("Navbar", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("shows Sign up and Login when the user is not logged in", () => {
    localStorage.removeItem("token");

    renderNavbar();

    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /my account/i })
    ).not.toBeInTheDocument();
  });

  it("shows My Account when the user is logged in", () => {
    localStorage.setItem("token", "fake-token");

    renderNavbar();

    expect(
      screen.getByRole("link", { name: /my account/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /sign up/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /login/i })
    ).not.toBeInTheDocument();
  });

  it("treats an empty token as logged out", () => {
    localStorage.setItem("token", "");

    renderNavbar();

    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /my account/i })
    ).not.toBeInTheDocument();
  });
});
