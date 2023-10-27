import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TFont = {
  icon: IconProp;
};

export default function LinkToSocialMedia({ icon }: TFont) {
  return <FontAwesomeIcon icon={icon} color="white" />;
}
