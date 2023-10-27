import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TLinkProps } from "./ButtonLink";

export default function LinkToSocialMedia({ icon }: TLinkProps) {
  return <FontAwesomeIcon icon={icon} color="white" />;
}
