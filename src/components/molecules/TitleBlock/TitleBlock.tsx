import { Subtitle, type SubtitleProps } from "../../atoms/Subtitle";
import { Title, type TitleProps } from "../../atoms/Title";
import { ActionLink, type ActionLinkProps } from "../../atoms/ActionLink";

type TitleBlockProps = {
  titleProps: TitleProps;
  subtitleProps: SubtitleProps;
  actionLinkProps?: ActionLinkProps;
};

function TitleBlock({
  titleProps,
  subtitleProps,
  actionLinkProps,
}: TitleBlockProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <Title {...titleProps} />
      <Subtitle {...subtitleProps} />
      {actionLinkProps && <ActionLink {...actionLinkProps} />}
    </div>
  );
}

export { TitleBlock };
