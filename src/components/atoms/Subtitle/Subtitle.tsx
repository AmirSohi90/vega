import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SubtitleProps = React.ComponentPropsWithoutRef<"p"> & {
  subtitle: string;
};

function Subtitle({ subtitle, className, ...props }: SubtitleProps) {
  return (
    <p
      className={twMerge(
        clsx("text-lg leading-relaxed text-gray-600", className)
      )}
      {...props}
    >
      {subtitle}
    </p>
  );
}

export { Subtitle };
export type { SubtitleProps };
