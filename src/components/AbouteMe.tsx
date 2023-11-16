import ImageTechno from "./ImageTechno";
import Title from "./Title";
import penpot from "../assets/penpot.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import typescript from "../assets/Typescript.webp";
import python from "../assets/Python.webp";
import react from "../assets/react.webp";
import sass from "../assets/sass.webp";
import nodeJs from "../assets/nodeJs.webp";
import mongoDB from "../assets/mongoDB.webp";
import github from "../assets/github.webp";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.webp";
import BlocText from "./BlocText";
import SectionComponents from "./SectionComponents";
import TitleLevel2 from "./TitleLevel2";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

export default function AboutMe() {
  const { theme } = useSelector((store: RootState) => store.theme);
  const { language } = useSelector((store: RootState) => store.language);
  return (
    <SectionComponents>
      <Title title={language === "en" ? en.AboutMe.title : fr.AboutMe.title} />
      <BlocText>
        <p>
          {language === "en" ? en.AboutMe.first : fr.AboutMe.first}
          <strong>{language === "en" ? en.AboutMe.job : fr.AboutMe.job}</strong>

          {language === "en" ? en.AboutMe.firstbis : fr.AboutMe.firstbis}
        </p>
      </BlocText>
      <BlocText>
        <p>
          {language === "en" ? en.AboutMe.second : fr.AboutMe.second}
          <a href="https://coder-pour-changer-de-vie.com/formations/">
            <strong className="hover:underline underline-offset-2 decoration-2">
              Vivre du Code
            </strong>{" "}
          </a>{" "}
          {language === "en" ? en.AboutMe.secondBis : fr.AboutMe.secondBis}
          <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20reacteur&utm_content=377851505166&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWTYa_na93HBD-c9K8ShKsObl08sLxYvEoh9e-yT-Qiic6t9RXcSxbQaAhLBEALw_wcB">
            <strong className="hover:underline underline-offset-2 decoration-2">
              Réacteur
            </strong>{" "}
          </a>
          {language === "en" ? en.AboutMe.secondTer : fr.AboutMe.secondTer}
        </p>
      </BlocText>

      <article className="mt-28">
        <TitleLevel2
          title={language === "en" ? en.AboutMe.section : fr.AboutMe.section}
        />
        <div className="flex justify-between flex-col gap-y-6 sm:gap-y-0 sm:flex-row">
          <div>
            <h3
              className={
                theme === "dark"
                  ? "mb-6  text-blTextMin font-bold text-center "
                  : "mb-6 text-lgTextMin font-bold text-center "
              }
            >
              Design
            </h3>
            <div
              className={
                theme === "dark"
                  ? "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col sm:gap-y-4 border-t border-blTextMin pt-6"
                  : "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col sm:gap-y-4 border-t border-lgTextMin pt-6"
              }
            >
              <ImageTechno
                source={penpot}
                alt="logo de Penpot"
                color="bg-white"
                name="Penpot"
              />
            </div>
          </div>
          <div>
            <h3
              className={
                theme === "dark"
                  ? "mb-6  text-blTextMin font-bold text-center "
                  : "mb-6 text-lgTextMin font-bold text-center "
              }
            >
              Languages
            </h3>
            <div
              className={
                theme === "dark"
                  ? "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-blTextMin pt-6"
                  : "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-lgTextMin pt-6"
              }
            >
              <ImageTechno
                source={html}
                alt="logo de HTML"
                color="bg-orange-400"
                name="HTML"
              />
              <ImageTechno
                source={css}
                alt="Logo de CSS"
                color="bg-blue-400"
                name="CSS"
              />
              <ImageTechno
                source={typescript}
                alt="Logo de TypeScript"
                color="bg-yellow-400"
                name="TypeScript"
              />
              <ImageTechno
                source={python}
                alt="logo de Python"
                color="bg-gradient-to-br from-blue-500 to-yellow-500"
                name="Python"
              />
            </div>
          </div>
          <div>
            <h3
              className={
                theme === "dark"
                  ? "mb-6  text-blTextMin font-bold text-center "
                  : "mb-6 text-lgTextMin font-bold text-center "
              }
            >
              Front-End
            </h3>
            <div
              className={
                theme === "dark"
                  ? "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-blTextMin pt-6"
                  : "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-lgTextMin pt-6"
              }
            >
              <ImageTechno
                source={react}
                alt="logo de React"
                color="bg-cyan-200"
                name="React"
              />
              <ImageTechno
                source={react}
                alt="logo de React Native"
                color="bg-purple-300"
                name="React Native"
              />
              <ImageTechno
                source={sass}
                alt="logo de Sass"
                color="bg-pink-400"
                name="SASS"
              />
              <ImageTechno
                source={tailwind}
                alt="logo de Tailwind"
                color="bg-blue-200"
                name="TailWind/ NativeWind"
              />
              <ImageTechno
                source={next}
                alt="logo de Next"
                color="bg-white"
                name="Next 12/13"
              />
            </div>
          </div>
          <div>
            <h3
              className={
                theme === "dark"
                  ? "mb-6  text-blTextMin font-bold text-center "
                  : "mb-6 text-lgTextMin font-bold text-center "
              }
            >
              Back-End
            </h3>
            <div
              className={
                theme === "dark"
                  ? "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-blTextMin pt-6"
                  : "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-lgTextMin pt-6"
              }
            >
              <ImageTechno
                source={nodeJs}
                alt="Logo de Node.js"
                color="bg-green-500"
                name="Node.js"
              />
              <ImageTechno
                source={mongoDB}
                alt="logo de MongoDB"
                color="bg-yellow-600"
                name="MongoDB"
              />
            </div>
          </div>
          <div>
            <h3
              className={
                theme === "dark"
                  ? "mb-6  text-blTextMin font-bold text-center "
                  : "mb-6 text-lgTextMin font-bold text-center "
              }
            >
              Tools
            </h3>
            <div
              className={
                theme === "dark"
                  ? "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-blTextMin pt-6"
                  : "flex flex-row gap-x-3 justify-center mb-10 sm:mb-0 sm:gap-x-0 sm:flex-col gap-y-4 border-t border-lgTextMin pt-6"
              }
            >
              <ImageTechno
                source={github}
                alt="logo de Github"
                color="bg-white"
                name="Github"
              />
            </div>
          </div>
        </div>
      </article>
    </SectionComponents>
  );
}
