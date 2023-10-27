import ButtonLink from "./ButtonLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <p>Hello, I'm</p>
          <p>Erwan Pellerin</p>
          <p>Full-Stack junior developper </p>
        </div>
        <figure className="border  border-lgBackground bg-black h-32 w-32 rounded-full">
          <img src="" alt="" />
        </figure>
      </div>
      <ButtonLink icon={faGithub} link="clik" />
    </div>
  );
}
