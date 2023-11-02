import LinkToSocialMedia from "./LinkToSocialMedia";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type TLinkProps = {
  icon: IconProp;
  link: string;
  name: string;
};

export default function ButtonLink({ icon, link, name }: TLinkProps) {
  return (
    <a
      href={link}
      target="blank"
      className="bg-lgButton dark:bg-blButton px-3 py-2 rounded-3xl flex items-center justify-center hover:bg-lgElementSeparator dark:hover:bg-blElementSeparator"
    >
      <LinkToSocialMedia icon={icon} />
      <span className="ml-2 text-white text-base">{name}</span>
    </a>
  );
}
