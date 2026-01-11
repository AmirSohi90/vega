import { Subtitle, type SubtitleProps } from "../../atoms/Subtitle";
import { Title, type TitleProps } from "../../atoms/Title";
import { NavLink, type NavLinkProps } from "../../atoms/NavLink";

type TitleBlockProps = {
  titleProps: TitleProps;
  subtitleProps: SubtitleProps;
  ctaProps?: NavLinkProps;
};

function TitleBlock({ titleProps, subtitleProps, ctaProps }: TitleBlockProps) {
  return (
    <div className="flex flex-col gap-5">
      <Title {...titleProps} />
      <Subtitle {...subtitleProps} />
      {ctaProps && <NavLink {...ctaProps} />}
    </div>
  );
}

export { TitleBlock };
