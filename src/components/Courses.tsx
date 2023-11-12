import Title from "./Title";
import logoReacteur from "../assets/leReacteur.webp";
import SectionComponents from "./SectionComponents";
import BlocText from "./BlocText";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

export default function Courses() {
  const { language } = useSelector((store: RootState) => store.language);
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <SectionComponents>
      <Title title={language === "en" ? en.Courses.title : fr.Courses.title} />
      <BlocText>
        <div className="flex gap-x-2 items-center mb-4">
          <img src={logoReacteur} className="w-6 h-6" />
          <h2
            className={
              theme === "dark"
                ? "text-xl  dark:text-blTextMax"
                : "text-xl text-lgTextMax "
            }
          >
            Bootcamp :{" "}
            <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20reacteur&utm_content=377851505166&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWTYa_na93HBD-c9K8ShKsObl08sLxYvEoh9e-yT-Qiic6t9RXcSxbQaAhLBEALw_wcB">
              <strong className="hover:underline underline-offset-2 decoration-2">
                Le Réacteur
              </strong>
            </a>
          </h2>
        </div>
        <p className="italic">
          {language === "en" ? en.Courses.subtitle : fr.Courses.subtitle}
        </p>
        <p
          className={
            theme === "dark"
              ? "my-4 font-bold underline underline-offset-4  dark:text-blTextMin"
              : "my-4 font-bold underline underline-offset-4 text-lgTextMin "
          }
        >
          {language === "en" ? en.Courses.section : fr.Courses.section}
        </p>
        <ul>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._1item : fr.Courses._1item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            JavaScript,
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            TypeScript,
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._2item : fr.Courses._2item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._3item : fr.Courses._3item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._4item : fr.Courses._4item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._5item : fr.Courses._5item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._6item : fr.Courses._6item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._7item : fr.Courses._7item}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en" ? en.Courses._8item : fr.Courses._8item}
          </li>
        </ul>
      </BlocText>
    </SectionComponents>
  );
}
