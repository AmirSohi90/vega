import clsx from "clsx";

type InputProps = React.ComponentPropsWithoutRef<"input">;

function TextInput({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
        className
      )}
      {...props}
    />
  );
}

export { TextInput };
