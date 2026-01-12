//TODO: ADD TESTS HERE

import { PageSection } from "../components/atoms/PageSection";
import { TitleBlock } from "../components/molecules/TitleBlock";

function HomePage() {
  const token = localStorage.getItem("token");
  const isLoggedIn = token;

  return (
    <PageSection>
      <TitleBlock
        titleProps={{ children: <HomePageTitle /> }}
        subtitleProps={{
          subtitle:
            "Manage your cryptocurrency, stocks, and cash investments in one easy-to-use dashboard.",
        }}
        actionLinkProps={{
          to: isLoggedIn ? "/login" : "my-account",
          variant: "secondary",
          children: "Get Started",
        }}
      />
    </PageSection>
  );
}

function HomePageTitle() {
  return (
    <>
      Track your financial
      <br className="hidden sm:block" />
      portfolio with ease
    </>
  );
}

export { HomePage };
