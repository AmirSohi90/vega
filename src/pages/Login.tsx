import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";

function Login() {
  return (
    <>
      <PageSection>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Welcome back
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Log in to view your portfolio balance, positions, and historical
            performance
          </p>
        </div>
        <Card>Login</Card>
      </PageSection>
    </>
  );
}

export { Login };
