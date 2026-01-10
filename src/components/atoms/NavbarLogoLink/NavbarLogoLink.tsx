import { Link } from "react-router";
import logo from "../../../assets/svgs/logo.svg";

function NavbarLogoLink() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img className="h-10 w-10 rounded-full bg-blue-600" src={logo} />
      <span className="hidden sm:inline text-xl font-semibold tracking-tight text-gray-900">
        FinanceApp
      </span>
    </Link>
  );
}

export { NavbarLogoLink };
