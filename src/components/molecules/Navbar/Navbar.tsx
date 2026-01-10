import { NavbarLogoLink } from "../../atoms/NavbarLogoLink";
import { NavLink } from "../../atoms/NavLink";
import { PageSection } from "../../atoms/PageSection/PageSection";

function Navbar() {
  return (
    <PageSection as="nav" className="flex items-center justify-between">
      <NavbarLogoLink />
      <div className="flex items-center gap-3">
        <NavLink to="/">Sign up</NavLink>
        <NavLink to="/login" variant="secondary">
          Login
        </NavLink>
      </div>
    </PageSection>
  );
}

export { Navbar };
