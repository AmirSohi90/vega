import { NavLink } from "../components/atoms/NavLink";
import { Navbar } from "../components/molecules/Navbar";

function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <Navbar>
          <NavLink to="/">Sign up</NavLink>
          <NavLink to="/" variant="secondary">
            Login
          </NavLink>
        </Navbar>
      </header>
      <main className="min-h[calc(100dvh - 73px)] inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white ">
        Main
      </main>
    </>
  );
}

export { HomePage };
