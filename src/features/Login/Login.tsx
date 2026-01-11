import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { TextInput } from "../../components/atoms/TextInput";
import { loginApi } from "../../api/auth";
import { useLoading } from "../../context/LoadingContext/useLoading";

function Login() {
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = ({
    e,
    email,
    password,
  }: {
    e: React.FormEvent;
    email: string;
    password: string;
  }) => {
    e.preventDefault();
    setIsLoading(true);
    loginApi({ email, password })
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/my-account");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      className="flex gap-2 flex-col"
      onSubmit={(e) => handleSubmit({ e, email, password })}
    >
      <fieldset aria-describedby="login-help" className="flex gap-2 flex-col">
        <legend className="sr-only">Login details</legend>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <TextInput
          id="email"
          name="email"
          type="email"
          required
          aria-describedby="email-hint"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <TextInput
          id="password"
          name="password"
          type="password"
          required
          aria-describedby="password-hint"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      {errorMessage && <p>{errorMessage}</p>}
      <Button type="submit" className="w-full max-w-none">
        Login
      </Button>
    </form>
  );
}

export { Login };
