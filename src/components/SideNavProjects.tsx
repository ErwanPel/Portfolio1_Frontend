import { motion } from "framer-motion";
import { TProjects, arrayProjects } from "../data/projectsArray";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type SideNavProps = {
  changeProject: (id: number) => void;
  nameProjects: string | null;
  setNameProjects: React.Dispatch<React.SetStateAction<string | null>>;
  projects: TProjects;
};

export default function SideNaveProjects({
  changeProject,
  nameProjects,
  setNameProjects,
  projects,
}: SideNavProps) {
  const { theme } = useSelector((store: RootState) => store.theme);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.7,
        },
      }}
      className={
        theme === "dark"
          ? " flex flex-wrap justify-center items-center cursor-grab active:cursor-grabbing gap-y-4  gap-x-4 px-4 w-72 sm:w-fit sm:flex-nowrap xl:w-36 mx-auto border xl:flex-wrap xl:fixed py-6  border-blElementSeparator rounded-3xl rounded-bl-3xl  bg-blBackgroundElement left-3 top-[500px] xl:left-8 xl:top-[200px] "
          : " flex flex-wrap justify-center items-center cursor-grab active:cursor-grabbing gap-y-4 gap-x-4 px-4 w-72 sm:w-fit sm:flex-nowrap xl:w-36 mx-auto border xl:flex-wrap xl:fixed py-6 border-lgElementSeparator rounded-3xl rounded-bl-3xl bg-lgBackgroundElement left-3 top-[500px] xl:left-8 xl:top-[200px] "
      }
    >
      {arrayProjects.map((img) => {
        return (
          <figure
            key={img.id}
            onClick={() => changeProject(img.id)}
            onMouseEnter={() => setNameProjects(img.name)}
            onMouseLeave={() => setNameProjects(null)}
            className={
              projects.name === img.name
                ? theme === "dark"
                  ? "rounded-lg sm:rounded-xl hover:cursor-pointer active:opacity-80 h-28 w-28 border  border-blElementSeparator opacity-30"
                  : "rounded-lg sm:rounded-xl hover:cursor-pointer active:opacity-80 h-28 w-28 border border-lgElementSeparator opacity-30"
                : theme === "dark"
                ? "rounded-lg sm:rounded-xl hover:cursor-pointer active:opacity-80 h-28 w-28 border  border-blElementSeparator"
                : "rounded-lg sm:rounded-xl hover:cursor-pointer active:opacity-80 h-28 w-28 border border-lgElementSeparator "
            }
          >
            {nameProjects === img.name ? (
              <div className="bg-black rounded-lg sm:rounded-xl opacity-80 w-full h-full flex justify-center items-center">
                <p className="text-white text-sm sm:text-base">{img.name}</p>
              </div>
            ) : (
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-xl"
                src={img.picture}
              />
            )}
          </figure>
        );
      })}
    </motion.nav>
  );
}
