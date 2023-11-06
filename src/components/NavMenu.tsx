import { motion } from "framer-motion";
import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import {
  goToHome,
  goToAboutMe,
  goToContacts,
  goToProjects,
  goToResources,
  goToCourse,
} from "../features/category/category";
import SeparatorMenu from "./SeparatorMenu";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export default function NavMenu() {
  const { choice } = useSelector((store: RootState) => store.category);
  const { theme } = useSelector((store: RootState) => store.theme);
  const dispatch: AppDispatch = useDispatch();

  const navVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariant = {
    hidden: { y: 1000 },
    show: { y: 0, transition: { type: "spring", stiffness: 40 } },
  };

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="show"
      className={
        theme === "dark"
          ? "hidden sm:flex overflow-hidden items-center justify-center  bg-blBackgroundElement  border-2 rounded-3xl  border-blBorder "
          : "hidden sm:flex overflow-hidden items-center justify-center bg-lgBackgroundElement  border-2 rounded-3xl border-lgBorder "
      }
    >
      <motion.button
        variants={buttonVariant}
        className={
          choice === null
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5  py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToHome())}
      >
        Home
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "about Me"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5 py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToAboutMe())}
      >
        About Me
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "projects"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5 py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToProjects())}
      >
        Projects
      </motion.button>
      <SeparatorMenu />

      <motion.button
        variants={buttonVariant}
        className={
          choice === "courses"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5 py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToCourse())}
      >
        Courses
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "resources"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5 py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToResources())}
      >
        Resources
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "contacts"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit px-5 py-3  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit px-5 py-3 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit px-5 py-3  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit px-5 py-3 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => dispatch(goToContacts())}
      >
        Contacts
      </motion.button>
    </motion.nav>
  );
}
