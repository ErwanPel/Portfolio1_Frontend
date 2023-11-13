import Title from "./Title";
import logoReacteur from "../assets/leReacteur.webp";
import logoOpenClassRoom from "../assets/openclassroom.webp";
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
      <div className="mt-16"></div>
      <BlocText>
        <div className="flex gap-x-2 items-center mb-4">
          <img src={logoOpenClassRoom} className="w-6 h-6" />
          <h2
            className={
              theme === "dark"
                ? "text-xl  dark:text-blTextMax"
                : "text-xl text-lgTextMax "
            }
          >
            <a href="https://openclassrooms.com/fr/">
              <strong className="hover:underline underline-offset-2 decoration-2">
                OpenClassRooms
              </strong>
            </a>
          </h2>
        </div>
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
            1{" "}
            <a
              href="https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible"
              className="hover:underline"
            >
              {language === "en"
                ? en.Courses.openClass_1
                : fr.Courses.openClass_1}
            </a>
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            2{" "}
            <a
              href="https://openclassrooms.com/fr/courses/8069761-simplifiez-vous-le-css-avec-sass"
              className="hover:underline"
            >
              {language === "en"
                ? en.Courses.openClass_2
                : fr.Courses.openClass_2}
            </a>
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            3{" "}
            <a
              href="https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes"
              className="hover:underline"
            >
              {language === "en"
                ? en.Courses.openClass_3
                : fr.Courses.openClass_3}
            </a>
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            4{" "}
            <a
              href="https://openclassrooms.com/fr/courses/6179306-securisez-vos-applications-web-avec-lowasp/8169176-securisez-les-donnees-sensibles-grace-a-la-cryptographie"
              className="hover:underline"
            >
              {language === "en"
                ? en.Courses.openClass_4
                : fr.Courses.openClass_4}
            </a>{" "}
            {language === "en" ? "(in progress)" : "(en cours)"}
          </li>
        </ul>
      </BlocText>
      <div className="mt-16"></div>
      <BlocText>
        <div className="flex gap-x-2 items-center mb-4">
          <h2
            className={
              theme === "dark"
                ? "text-xl  dark:text-blTextMax"
                : "text-xl text-lgTextMax "
            }
          >
            <a href="https://coder-pour-changer-de-vie.com/">
              <strong className="hover:underline underline-offset-2 decoration-2">
                Vivre du Code
              </strong>
            </a>{" "}
          </h2>
        </div>
        <p className="italic">
          {language === "en"
            ? en.Courses._timeVivreDuCode
            : fr.Courses._timeVivreDuCode}
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
            {language === "en"
              ? en.Courses._1VivreDuCode
              : fr.Courses._1VivreDuCode}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en"
              ? en.Courses._2VivreDuCode
              : fr.Courses._2VivreDuCode}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en"
              ? en.Courses._3VivreDuCode
              : fr.Courses._3VivreDuCode}
          </li>
          <li
            className={
              theme === "dark"
                ? "dark:text-blTextMin mb-1"
                : "text-lgTextMin mb-1"
            }
          >
            {language === "en"
              ? en.Courses._4VivreDuCode
              : fr.Courses._4VivreDuCode}
          </li>
        </ul>
      </BlocText>
    </SectionComponents>
  );
}
