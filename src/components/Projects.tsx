import { motion } from "framer-motion";
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
    <div className="flex flex-col items-center relative">
      <Title title="< Projects >" />
      <p className="text-justify  text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl ">
        Ici vous pouvez voir quelques projets que j'ai crées durant la
        formation. En plus des fonctionnalités de l'application, je m'attache à
        intégrer des concepts qui me semblent indispensables comme
        l'accessibilité (WCAG), l'interactivité et la sécurité au sein de mes
        créations.
      </p>

      <article className="mt-4">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
            },
          }}
          drag
          dragConstraints={{
            left: 0,
            right: 950,
            top: -200,
            bottom: 100,
          }}
          className="flex flex-wrap justify-center items-center cursor-grab active:cursor-grabbing gap-y-4 w-36 mx-auto border fixed py-6 border-lgElementSeparator rounded-3xl rounded-bl-3xl bg-lgBackgroundElement left-6 top-[200px] "
        >
          {arrayProjects.map((img) => {
            return (
              <figure
                key={img.id}
                onClick={() => changeProject(img.id)}
                onMouseEnter={() => setNameProjects(img.name)}
                onMouseLeave={() => setNameProjects(null)}
                className="rounded-xl hover:cursor-pointer h-28 w-28 border border-lgElementSeparator"
              >
                {nameProjects === img.name ? (
                  <div className="bg-black rounded-xl opacity-80 w-full h-full flex justify-center items-center">
                    <p className="text-white ">{img.name}</p>
                  </div>
                ) : (
                  <img
                    className="object-cover w-full h-full rounded-xl"
                    src={img.picture}
                  />
                )}
              </figure>
            );
          })}
        </motion.nav>
        <section className="flex flex-col">
          <nav className="flex justify-around items-center border-t border-lgElementSeparator mt-12 pt-10">
            <button onClick={() => changePage("left")}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-lgTextMin text-[24px] p-2 hover:bg-lgHoverBackgroundElement rounded-full"
              />
            </button>

            <h2 className="text-lgTextMin text-[32px]">{projects.name}</h2>
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
          <article className="border-2 border-lgTextMax rounded-full py-4 px-6 flex items-center mx-auto justify-around w-fit gap-x-12 mt-10">
            {projects.stacks.map((stack) => {
              return (
                <ImageTechno
                  source={stack.source}
                  alt={stack.alt}
                  color={stack.color}
                  name={stack.name}
                />
              );
            })}
          </article>

          <p className="text-justify m-8 text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl">
            {projects.description}
          </p>
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
      </article>
    </div>
  );
}
