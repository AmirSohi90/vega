import clsx from "clsx";
import type React from "react";

const defaultElement = "section";

type PolymorphicAsProp<E extends React.ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type PageSectionProps<E extends React.ElementType = typeof defaultElement> =
  PolymorphicProps<E>;

function PageSection<E extends React.ElementType = typeof defaultElement>({
  as,
  children,
  className,
}: PageSectionProps<E>) {
  const Component = as ?? defaultElement;
  return (
    <Component
      className={clsx("mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}

export { PageSection };
