import clsx from "clsx";
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
      className={clsx(
        "rounded-2xl border border-gray-200 flex flex-col gap-6 rounded-xl border p-6  w-full",
        cardVariant[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
