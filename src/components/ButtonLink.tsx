import LinkToSocialMedia from "./LinkToSocialMedia";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type TLinkProps = {
  icon: IconProp;
  link: string;
};

export default function ButtonLink({ icon, link }: TLinkProps) {
  return (
    <button
      onClick={() => console.log(link)}
      className="bg-lgButton px-2 h-8 rounded-3xl"
    >
      <LinkToSocialMedia icon={icon} />
      <span className="ml-2">Github</span>
    </button>
  );
}
