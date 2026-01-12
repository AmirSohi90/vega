import type React from "react";
import { tabVariant } from "./tab.config";
import clsx from "clsx";

type TabVariant = keyof typeof tabVariant;

type TabProps = React.ComponentPropsWithoutRef<"span"> & {
  label: string;
  variant?: TabVariant;
};

function Tab({ label, variant = "inActive", className, ...props }: TabProps) {
  return (
    <span
      className={clsx(
        "inline-block p-2.5 rounded",
        tabVariant[variant],
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
}

export { Tab };
