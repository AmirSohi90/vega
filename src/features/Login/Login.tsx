import { TextInput } from "../../components/atoms/TextInput";

function Login() {
  return (
    <form className="flex gap-2 flex-col">
      <fieldset aria-describedby="login-help" className="flex gap-2 flex-col">
        <legend className="sr-only">Login details</legend>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <TextInput
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          aria-describedby="email-hint"
          placeholder="Email"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <TextInput
          id="password"
          name="password"
          type="password"
          autoComplete="username"
          required
          aria-describedby="password-hint"
          placeholder="Password"
        />
      </fieldset>
    </form>
  );
}

export { Login };
