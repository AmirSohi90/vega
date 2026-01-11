import { NavbarLogoLink } from "../../atoms/NavbarLogoLink";
import { ActionLink } from "../../atoms/ActionLink";
import { PageSection } from "../../atoms/PageSection/PageSection";

function Navbar() {
  return (
    <PageSection as="nav" className="flex items-center justify-between">
      <NavbarLogoLink />
      <div className="flex items-center gap-3">
        <ActionLink to="/">Sign up</ActionLink>
        <ActionLink to="/login" variant="secondary">
          Login
        </ActionLink>
      </div>
    </PageSection>
  );
}

export { Navbar };
