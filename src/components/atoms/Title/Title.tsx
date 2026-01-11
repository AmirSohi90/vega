import clsx from "clsx";
import type React from "react";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps<T extends Heading = "h1"> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Title<T extends Heading = "h1">({
  as,
  children,
  className,
  ...props
}: TitleProps<T>) {
  const Component = as || "h1";
  return (
    <Component
      className={clsx(
        "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
export { Title };
export type { TitleProps };
