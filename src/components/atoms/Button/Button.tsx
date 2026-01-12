import clsx from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
};

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "inline-block rounded-lg px-4 py-2 text-sm bg-blue-900 font-semibold text-white hover:bg-blue-950",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
