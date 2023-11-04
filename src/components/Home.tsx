import ButtonLink from "./ButtonLink";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
import SectionComponents from "./SectionComponents";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export default function Home() {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <SectionComponents>
      <Title title="< Home />" />
      <div className="flex justify-between items-center">
        <div>
          <p
            className={
              theme === "dark"
                ? "text-3xl mb-4  text-blTextMin"
                : "text-3xl mb-4 text-lgTextMin "
            }
          >
            Hello, I'm
          </p>
          <p
            className={
              theme === "dark"
                ? "text-[48px] font-bold mb-4  text-blTextMax"
                : "text-[48px] font-bold mb-4 text-lgTextMax"
            }
          >
            Erwan Pellerin
          </p>
          <p
            className={
              theme === "dark"
                ? "text-3xl text-blTextMin"
                : "text-3xl  text-lgTextMin "
            }
          >
            Full-Stack junior developper
          </p>
        </div>

        <figure
          className={
            theme === "dark"
              ? "border  border-blBackground bg-black h-40 w-40 rounded-full"
              : "border border-lgBackground  bg-black h-40 w-40 rounded-full"
          }
        >
          <img src="" alt="" />
        </figure>
      </div>
      <p
        className={
          theme === "dark"
            ? "mt-24 text-5xl  text-blTextMin"
            : "mt-24 text-5xl text-lgTextMin "
        }
      >
        Welcome on my portfolio
      </p>
      <nav className="flex gap-x-3 flex-wrap mt-12">
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
    </SectionComponents>
  );
}
