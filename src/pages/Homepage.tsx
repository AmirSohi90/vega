import { NavLink } from "../components/atoms/NavLink";
import { PageSection } from "../components/atoms/PageSection";
import { Navbar } from "../components/molecules/Navbar";

function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <Navbar>
          <NavLink to="/">Sign up</NavLink>
          <NavLink to="/login" variant="secondary">
            Login
          </NavLink>
        </Navbar>
      </header>
      <main className="bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <PageSection className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Track your financial
            <br className="hidden sm:block" />
            portfolio with ease
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Manage your cryptocurrency, stocks, and cash investments in one
            easy-to-use dashboard.
          </p>
          <NavLink to="/login" variant="secondary">
            Get Started
          </NavLink>
        </PageSection>
      </main>
    </>
  );
}

export { HomePage };
