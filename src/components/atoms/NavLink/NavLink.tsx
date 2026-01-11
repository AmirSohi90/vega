import clsx from "clsx";
import type React from "react";
import { linkVariant } from "./navLink.config";
import { Link, type LinkProps } from "react-router";

type LinkVariant = keyof typeof linkVariant;

type NavLinkProps = LinkProps & {
  variant?: LinkVariant;
  children: React.ReactNode;
  to: string;
};

function NavLink({
  variant = "primary",
  children,
  className,
  to,
  ...props
}: NavLinkProps) {
  return (
    <Link
      {...props}
      to={to}
      className={clsx(
        "inline-block rounded-lg px-4 py-2 text-sm w-max",
        linkVariant[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

export { NavLink };
export type { NavLinkProps };
