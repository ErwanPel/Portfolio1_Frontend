import { motion } from "framer-motion";
import {
  faAngleDown,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import vinted from "../../public/vinted.png";
import marvel from "../../public/marvel.png";
import { useState } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TProjects = {
  name: string;
  id: number;
  picture: string;
};

const arrayProjects: TProjects[] = [
  { name: "Vinted", id: 0, picture: vinted },
  { name: "Marvel", id: 1, picture: marvel },
  { name: "GiveMovies", id: 2, picture: vinted },
  { name: "SnakeVs", id: 3, picture: vinted },
];

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
        setProjects(arrayProjects[id]);
      } else {
        setID((prev) => prev - 1);
        setProjects(arrayProjects[id]);
      }
    } else {
      if (id === 3) {
        setID(() => 0);
        setProjects(arrayProjects[id]);
      } else {
        setID((prev) => prev + 1);
        setProjects(arrayProjects[id]);
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
    <div className="p-4 my-12 flex flex-col items-center relative">
      <Title title="< Projects >" />
      <p className="text-justify mb-8 text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl ">
        Ici vous pouvez voir quelques projets que j'ai crées durant la
        formation. En plus des fonctionnalités de l'application, je m'attache à
        intégrer des concepts qui me semblent indispensables comme
        l'accessibilité (WCAG), l'interactivité et la sécurité au sein de mes
        créations.
      </p>
      <p className="text-xl text-lgTextMin">Tu peux me déplacer</p>
      <FontAwesomeIcon icon={faAngleDown} className="text-lgTextMin" />
      <article className="mt-4">
        <div className="flex flex-wrap justify-center items-center  gap-x-4 h-64 w-60 border border-lgElementSeparator border-dashed absolute rounded-tr-3xl rounded-bl-3xl left-[200px] top-82">
          <figure className="h-24 w-24 border border-lgElementSeparator border-dashed"></figure>
          <figure className="h-24 w-24 border border-lgElementSeparator border-dashed"></figure>
          <figure className="h-24 w-24 border border-lgElementSeparator border-dashed"></figure>
          <figure className="h-24 w-24 border border-lgElementSeparator border-dashed"></figure>
        </div>
        <motion.nav
          drag
          className="flex flex-wrap justify-center items-center cursor-grab active:cursor-grabbing gap-x-4 h-64 w-60 mx-auto border relative border-lgElementSeparator rounded-tr-3xl rounded-bl-3xl bg-lgBackgroundElement"
        >
          {arrayProjects.map((img) => {
            return (
              <figure
                key={img.id}
                onClick={() => changeProject(img.id)}
                onMouseEnter={() => setNameProjects(img.name)}
                onMouseLeave={() => setNameProjects(null)}
                className="rounded-xl hover:cursor-pointer h-24 w-24 border border-lgElementSeparator"
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
        <section>
          <nav className="flex justify-between items-center mt-10">
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
          <figure className="mt-10 h-[400px] w-full rounded-lg border shadow-2xl">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={projects.picture}
              alt={`photo du projet ${projects.name}`}
            />
          </figure>
          <nav>github + url</nav>
          <article>Stack</article>
          <p>description</p>
          <p>video</p>
        </section>
      </article>
    </div>
  );
}
