import { PageSection } from "../components/atoms/PageSection";
import { TitleBlock } from "../components/molecules/TitleBlock";

function HomePage() {
  return (
    <>
      <PageSection>
        <TitleBlock
          titleProps={{ children: <HomePageTitle /> }}
          subtitleProps={{
            subtitle:
              "Manage your cryptocurrency, stocks, and cash investments in one easy-to-use dashboard.",
          }}
          ctaProps={{
            to: "/login",
            variant: "secondary",
            children: "Get Started",
          }}
        />
      </PageSection>
    </>
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
