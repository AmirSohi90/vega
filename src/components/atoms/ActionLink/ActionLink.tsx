import clsx from "clsx";
import type React from "react";
import { actionLinkVariant } from "./actionLink.config";
import { Link, type LinkProps } from "react-router";

type ActionLinkVariant = keyof typeof actionLinkVariant;

type ActionLinkProps = LinkProps & {
  variant?: ActionLinkVariant;
  children: React.ReactNode;
  to: string;
};

function ActionLink({
  variant = "primary",
  children,
  className,
  to,
  ...props
}: ActionLinkProps) {
  return (
    <Link
      {...props}
      to={to}
      className={clsx(
        "inline-block rounded-lg px-4 py-2 text-sm w-max",
        actionLinkVariant[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

export { ActionLink };
export type { ActionLinkProps };
