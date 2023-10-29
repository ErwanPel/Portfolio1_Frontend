import ButtonLink from "./ButtonLink";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Home() {
  return (
    <div className="p-4">
      <Title title="< Home />" />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl mb-4 text-lgTextMin">Hello, I'm</p>
          <p className="text-[48px] font-bold mb-4 text-lgTextMax">
            Erwan Pellerin
          </p>
          <p className="text-3xl text-lgTextMin">
            Full-Stack junior developper
          </p>
        </div>
        <figure className="border  border-lgBackground bg-black h-40 w-40 rounded-full">
          <img src="" alt="" />
        </figure>
      </div>
      <nav className="flex gap-x-3 flex-wrap mt-24">
        <ButtonLink
          icon={faGithub}
          link="https://github.com/ErwanPel"
          name="Github"
        />
        <ButtonLink
          icon={faLinkedinIn}
          link="https://linkedin.com/in/erwan-pellerin-1a6387211"
          name="Linkedin"
        />
        <ButtonLink
          icon={faEnvelope}
          link="mailto:erwanpellerinpro@gmail.com"
          name="erwanpellerinpro@gmail.com"
        />
      </nav>
    </div>
  );
}
