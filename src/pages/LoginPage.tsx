import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import { TitleBlock } from "../components/molecules/TitleBlock";
import { Login } from "../features/Login/Login";

function LoginPage() {
  return (
    <>
      <PageSection>
        <div className="flex gap-2 md:gap-5 flex-col md:flex-row justify-between">
          <TitleBlock
            titleProps={{ children: "Welcome Back" }}
            subtitleProps={{
              subtitle:
                "Log in to view your portfolio balance, positions, and historical performance",
            }}
          />
          <Card className="max-w-md">
            <Login />
          </Card>
        </div>
      </PageSection>
    </>
  );
}

export { LoginPage };
