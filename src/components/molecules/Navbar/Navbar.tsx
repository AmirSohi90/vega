import { NavbarLogoLink } from "../../atoms/NavbarLogoLink";
import { PageSection } from "../../atoms/PageSection/PageSection";

type NavbarProps = {
  children: React.ReactNode;
};

function Navbar({ children }: NavbarProps) {
  return (
    <PageSection as="nav" className="flex items-center justify-between">
      <NavbarLogoLink />

      <div className="flex items-center gap-3">{children}</div>
    </PageSection>
  );
}

export { Navbar };
