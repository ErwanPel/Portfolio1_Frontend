/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faAngleRight,
  faAngleLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { arrayProjects } from "../data/projectsArray";
import { useState } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLink from "./ButtonLink";
import ImageTechno from "./ImageTechno";
import SectionComponents from "./SectionComponents";
import BlocText from "./BlocText";
import SideNaveProjects from "./SideNavProjects";
import TitleLevel2 from "./TitleLevel2";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

export default function Projects() {
  const [nameProjects, setNameProjects] = useState<string | null>(null);
  const [id, setID] = useState<number>(0);
  const [projects, setProjects] = useState(arrayProjects[id]);
  const [littleScreen] = useState<boolean>(
    window.innerWidth < 1280 ? true : false
  );

  const { language } = useSelector((store: RootState) => store.language);
  const { theme } = useSelector((store: RootState) => store.theme);

  const changePage = (direction: string) => {
    if (direction === "left") {
      if (id === 0) {
        setID(() => 3);
        setProjects(arrayProjects[3]);
      } else {
        setID((prev) => prev - 1);
        setProjects(arrayProjects[id - 1]);
      }
    } else {
      if (id === 3) {
        setID(() => 0);
        setProjects(arrayProjects[0]);
      } else {
        setID((prev) => prev + 1);
        setProjects(arrayProjects[id + 1]);
      }
    }
  };

  const changeProject = (id: number) => {
    if (projects.id !== id) {
      setID(() => id);
      setProjects(() => arrayProjects[id]);
    }
  };

  return (
    <SectionComponents>
      <Title
        title={language !== "en" ? en.Projects.title : fr.Projects.title}
      />
      <BlocText>
        <p>{language !== "en" ? en.Projects.head : fr.Projects.head}</p>
      </BlocText>
      <SideNaveProjects
        projects={projects}
        changeProject={changeProject}
        nameProjects={nameProjects}
        setNameProjects={setNameProjects}
        littleScreen={littleScreen}
      />
      <section className="flex flex-col mt-8 ">
        <nav
          className={
            theme === "dark"
              ? "flex justify-around items-center border-t  border-blElementSeparator mt-12 pt-10"
              : "flex justify-around items-center border-t border-lgElementSeparator  mt-12 pt-10"
          }
        >
          <button onClick={() => changePage("left")}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={
                theme === "dark"
                  ? " text-blTextMin text-[24px] p-2 active:opacity-70  hover:bg-blHoverBackgroundElement rounded-full"
                  : "text-lgTextMin  text-[24px] p-2 active:opacity-70  hover:bg-lgHoverBackgroundElement rounded-full"
              }
            />
          </button>
          <TitleLevel2 title={projects.name} />

          <button>
            <FontAwesomeIcon
              onClick={() => changePage("right")}
              icon={faAngleRight}
              className={
                theme === "dark"
                  ? " text-blTextMin text-[24px] p-2 active:opacity-70  hover:bg-blHoverBackgroundElement rounded-full"
                  : "text-lgTextMin  text-[24px] p-2 active:opacity-70  hover:bg-lgHoverBackgroundElement rounded-full"
              }
            />
          </button>
        </nav>
        <figure className="mt-10 self-center w-fit sm:h-[500px]  rounded-lg">
          <img
            className={
              theme === "dark"
                ? "object-contain w-full h-full rounded-lg border-2 border-blBorder"
                : "object-contain w-full h-full rounded-lg border-2 border-lgBorder"
            }
            src={projects.picture}
            alt={`photo du projet ${projects.name}`}
          />
        </figure>
        <article
          className={
            theme === "dark"
              ? "border-2  border-blBorder rounded-3xl sm:rounded-full py-4 px-6 flex items-center mx-auto justify-around  gap-y-4 flex-wrap sm:w-fit gap-x-12 mt-6 sm:my-10"
              : "border-2 border-lgBorder rounded-3xl sm:rounded-full py-4 px-6 flex items-center mx-auto justify-around  gap-y-4 flex-wrap sm:w-fit gap-x-12 mt-6 sm:my-10"
          }
        >
          {projects.stacks.map((stack) => {
            return (
              <ImageTechno
                key={stack.name}
                source={stack.source}
                alt={stack.alt}
                color={stack.color}
                name={stack.name}
              />
            );
          })}
        </article>
        <BlocText>
          <p>
            {language !== "en"
              ? projects.description_en
              : projects.description_fr}
          </p>
        </BlocText>

        <nav className="flex mt-6 justify-center gap-x-4 gap-y-4 flex-wrap">
          {projects.github.map((git) => {
            return (
              <ButtonLink
                key={git.link}
                icon={faGithub}
                link={git.link}
                name={git.type}
              />
            );
          })}
          {projects.urlLink && (
            <ButtonLink
              icon={faArrowUpRightFromSquare}
              link={projects.urlLink}
              name={`Site ${projects.name}`}
            />
          )}
        </nav>
        <img
          className={
            theme === "dark"
              ? "mt-24 rounded-xl mx-auto border-2 border-blBorder"
              : "mt-24 rounded-xl mx-auto border-2 border-lgBorder"
          }
          src={projects.video}
          alt=""
        />
      </section>
    </SectionComponents>
  );
}
