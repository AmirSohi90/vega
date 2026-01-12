import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cardVariant } from "./card.config";

type CardVariant = keyof typeof cardVariant;

type CardProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  variant?: CardVariant;
};

function Card({
  children,
  className,
  variant = "primary",
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "flex w-full flex-col gap-6 rounded-2xl border border-gray-200 p-6",
          cardVariant[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
