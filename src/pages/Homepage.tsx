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
          actionLinkProps={{
            to: "/login",
            variant: "secondary",
            children: "Get Started",
          }}
        />
        <button
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
          onClick={async () => {
            const res = await fetch("/msw-health");
            const json = await res.json();
            alert(JSON.stringify(json));
          }}
        >
          Test MSW
        </button>
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
