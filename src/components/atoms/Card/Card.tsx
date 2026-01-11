import clsx from "clsx";

type CardProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white flex flex-col gap-6 rounded-xl border p-6  w-full max-w-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
