import { NavbarLogoLink } from "../../atoms/NavbarLogoLink";
import { ActionLink } from "../../atoms/ActionLink";
import { PageSection } from "../../atoms/PageSection/PageSection";

function Navbar() {
  const isLoggedIn = localStorage.getItem("token");
  const shouldShowSignUpLink = !isLoggedIn;
  const shouldShowLoginLink = !isLoggedIn;
  const shouldShowMyAccountLink = isLoggedIn;
  return (
    <PageSection as="nav" className="flex items-center justify-between">
      <NavbarLogoLink />
      <div className="flex items-center gap-3">
        {shouldShowSignUpLink && <ActionLink to="/">Sign up</ActionLink>}
        {shouldShowLoginLink && (
          <ActionLink to="/login" variant="secondary">
            Login
          </ActionLink>
        )}
        {shouldShowMyAccountLink && (
          <ActionLink to="/my-account" variant="secondary">
            My Account
          </ActionLink>
        )}
      </div>
    </PageSection>
  );
}

export { Navbar };
