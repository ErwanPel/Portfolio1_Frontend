import ButtonLink from "./ButtonLink";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
import SectionComponents from "./SectionComponents";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import fr from "../translations/en/global.json";
import en from "../translations/fr/global.json";
import profil from "../assets/profil.jpg";

export default function Home() {
  const { language } = useSelector((store: RootState) => store.language);
  const { theme } = useSelector((store: RootState) => store.theme);

  return (
    <SectionComponents>
      <Title title={language !== "en" ? en.Home.title : fr.Home.title} />
      <div className="flex flex-col gap-y-16 lg:flex-row sm:justify-between items-center gap-x-12">
        <div className="flex flex-col items-center mt-4 gap-y-2 sm:items-start ">
          <p
            className={
              theme === "dark"
                ? "text-3xl mb-4  text-blTextMin"
                : "text-3xl mb-4 text-lgTextMin "
            }
          >
            {language !== "en" ? en.Home.first : fr.Home.first}
          </p>
          <p
            className={
              theme === "dark"
                ? "text-2xl sm:text-[48px] font-bold mb-4  text-blTextMax"
                : "text-2xl sm:text-[48px] font-bold mb-4 text-lgTextMax"
            }
          >
            Erwan Pellerin
          </p>
          <p
            className={
              theme === "dark"
                ? "text-xl sm:text-3xl text-blTextMin"
                : "text-xl sm:text-3xl  text-lgTextMin "
            }
          >
            {language !== "en" ? en.Home.second : fr.Home.second}
          </p>
        </div>

        <figure
          className={
            theme === "dark"
              ? "flex items-center justify-center h-44 w-44 md:h-52 md:w-52 rounded-full overflow-hidden"
              : "flex items-center justify-center h-44 w-44 md:h-52 md:w-52 rounded-full overflow-hidden"
          }
        >
          <img className="object-cover " src={profil} alt="photo d'Erwan" />
        </figure>
      </div>
      <p
        className={
          theme === "dark"
            ? "mt-24 text-3xl text-center sm:text-start sm:text-5xl  text-blTextMin"
            : "mt-24 text-3xl text-center sm:text-start sm:text-5xl text-lgTextMin "
        }
      >
        {language !== "en" ? en.Home.third : fr.Home.third}
      </p>
      <nav className="flex gap-x-3 flex-wrap mt-12 gap-y-4 justify-center sm:justify-start">
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
