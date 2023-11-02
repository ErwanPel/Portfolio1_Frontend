import { motion } from "framer-motion";
import { arrayProjects } from "../data/projectsArray";

type SideNavProps = {
  changeProject: (id: number) => void;
  nameProjects: string | null;
  setNameProjects: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SideNaveProjects({
  changeProject,
  nameProjects,
  setNameProjects,
}: SideNavProps) {
  return (
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
      className="flex flex-wrap justify-center items-center cursor-grab active:cursor-grabbing gap-y-4 w-36 mx-auto border fixed py-6 border-lgElementSeparator rounded-3xl rounded-bl-3xl bg-lgBackgroundElement left-8 top-[200px] "
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
  );
}
