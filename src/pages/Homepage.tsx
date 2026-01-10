import { NavLink } from "../components/atoms/NavLink";
import { PageSection } from "../components/atoms/PageSection";
import { Title } from "../components/atoms/Title";

function HomePage() {
  return (
    <>
      <PageSection className="flex flex-col gap-5">
        <Title>
          Track your financial
          <br className="hidden sm:block" />
          portfolio with ease
        </Title>
        <p className="text-lg leading-relaxed text-gray-600">
          Manage your cryptocurrency, stocks, and cash investments in one
          easy-to-use dashboard.
        </p>
        <NavLink to="/login" variant="secondary">
          Get Started
        </NavLink>
      </PageSection>
    </>
  );
}

export { HomePage };
