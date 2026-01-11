import clsx from "clsx";

type SubtitleProps = React.ComponentPropsWithoutRef<"p"> & {
  subtitle: string;
};

function Subtitle({ subtitle, className, ...props }: SubtitleProps) {
  return (
    <p
      className={clsx("text-lg leading-relaxed text-gray-600", className)}
      {...props}
    >
      {subtitle}
    </p>
  );
}

export { Subtitle };
export type { SubtitleProps };
