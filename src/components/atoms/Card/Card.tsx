import clsx from "clsx";

type CardProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
