import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import { TitleBlock } from "../components/molecules/TitleBlock";

function Login() {
  return (
    <>
      <PageSection>
        <TitleBlock
          titleProps={{ children: "Welcome Back" }}
          subtitleProps={{
            subtitle:
              "Log in to view your portfolio balance, positions, and historical performance",
          }}
        />
        <Card>Login</Card>
      </PageSection>
    </>
  );
}

export { Login };
