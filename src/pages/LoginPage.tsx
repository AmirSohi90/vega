import React from "react";
import { useNavigate } from "react-router";
import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import { TitleBlock } from "../components/molecules/TitleBlock";
import { Login } from "../features/Login";

function LoginPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/my-account");
    }
  }, [navigate]);

  return (
    <PageSection>
      <div className="flex gap-2 md:gap-5 flex-col sm:flex-row justify-between">
        <TitleBlock
          titleProps={{ children: "Welcome Back" }}
          subtitleProps={{
            subtitle:
              "Log in to view your portfolio balance, positions, and historical performance",
          }}
        />
        <Card className="sm:max-w-md">
          <Login />
        </Card>
      </div>
    </PageSection>
  );
}

export { LoginPage };
