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
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCloseMenu } from "../features/menuMobile/menuMobile";

export default function NavMenuDropDown() {
  const { choice } = useSelector((store: RootState) => store.category);
  const { theme } = useSelector((store: RootState) => store.theme);
  const dispatch: AppDispatch = useDispatch();

  const navVariant = {
    hidden: { y: -1000 },
    show: {
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariant = {
    hidden: { x: 1000 },
    show: { x: 0, transition: { type: "spring", stiffness: 40 } },
  };

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="show"
      className={
        theme === "dark"
          ? "relative z-4 p-4 flex flex-col overflow-hidden items-center justify-center  bg-blBackgroundElement  border-2  border-blBorder "
          : "relative z-4 p-4 flex flex-col overflow-hidden items-center justify-center bg-lgBackgroundElement  border-2 border-lgBorder "
      }
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="self-end mr-6 cursor-pointer "
        onClick={() => dispatch(setCloseMenu())}
        color="#12A594"
      />
      <motion.button
        variants={buttonVariant}
        className={
          choice === null
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement  `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToHome());
          dispatch(setCloseMenu());
        }}
      >
        Home
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "about Me"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToAboutMe());
          dispatch(setCloseMenu());
        }}
      >
        About Me
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "projects"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToProjects());
          dispatch(setCloseMenu());
        }}
      >
        Projects
      </motion.button>
      <SeparatorMenu />

      <motion.button
        variants={buttonVariant}
        className={
          choice === "courses"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToCourse());
          dispatch(setCloseMenu());
        }}
      >
        Courses
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "resources"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToResources());
          dispatch(setCloseMenu());
        }}
      >
        Resources
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "contacts"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToContacts());
          dispatch(setCloseMenu());
        }}
      >
        Contacts
      </motion.button>
    </motion.nav>
  );
}
