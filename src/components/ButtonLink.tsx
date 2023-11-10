import LinkToSocialMedia from "./LinkToSocialMedia";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export type TLinkProps = {
  icon: IconProp;
  link: string;
  name: string;
};

export default function ButtonLink({ icon, link, name }: TLinkProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <a
      href={link}
      target="blank"
      className={
        theme === "dark"
          ? " bg-blButton px-3 py-2 active:opacity-70 rounded-3xl flex items-center justify-center hover:bg-blElementSeparator"
          : "bg-lgButton  px-3 py-2 active:opacity-70 rounded-3xl flex items-center justify-center hover:bg-lgElementSeparator "
      }
    >
      <LinkToSocialMedia icon={icon} />
      <span className="ml-2 text-white text-base">{name}</span>
    </a>
  );
}
