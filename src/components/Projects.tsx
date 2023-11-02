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

export default function Projects() {
  const [nameProjects, setNameProjects] = useState<string | null>(null);
  const [id, setID] = useState<number>(0);
  const [projects, setProjects] = useState(arrayProjects[id]);

  const changePage = (direction: string) => {
    console.log(direction);
    console.log(arrayProjects[id], id);

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

  console.log(id, projects);

  return (
    <SectionComponents>
      <Title title="< Projects >" />
      <BlocText>
        <p>
          Ici vous pouvez voir quelques projets que j'ai crées durant la
          formation. En plus des fonctionnalités de l'application, je m'attache
          à intégrer des concepts qui me semblent indispensables comme
          l'accessibilité (WCAG), l'interactivité et la sécurité au sein de mes
          créations.
        </p>
      </BlocText>
      <SideNaveProjects
        changeProject={changeProject}
        nameProjects={nameProjects}
        setNameProjects={setNameProjects}
      />
      <section className="flex flex-col mt-8 ">
        <nav className="flex justify-around items-center border-t border-lgElementSeparator mt-12 pt-10">
          <button onClick={() => changePage("left")}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-lgTextMin text-[24px] p-2 hover:bg-lgHoverBackgroundElement rounded-full"
            />
          </button>
          <TitleLevel2 title={projects.name} />

          <button>
            <FontAwesomeIcon
              onClick={() => changePage("right")}
              icon={faAngleRight}
              className="text-lgTextMin text-[24px] p-2 hover:bg-lgHoverBackgroundElement rounded-full"
            />
          </button>
        </nav>
        <figure className="mt-10 self-center w-fit h-[500px] rounded-lg shadow-2xl">
          <img
            className="object-contain w-full h-full rounded-lg"
            src={projects.picture}
            alt={`photo du projet ${projects.name}`}
          />
        </figure>
        <article className="border-2 border-lgTextMax rounded-full py-4 px-6 flex items-center mx-auto justify-around w-fit gap-x-12 my-10">
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
          <p>{projects.description}</p>
        </BlocText>

        <nav className="flex mt-6 justify-center gap-x-4">
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
              name={projects.urlLink}
            />
          )}
        </nav>
        <p>video</p>
      </section>
    </SectionComponents>
  );
}
