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
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

export default function NavMenuDropDown() {
  const { language } = useSelector((store: RootState) => store.language);

  const { choice } = useSelector((store: RootState) => store.category);
  const { theme } = useSelector((store: RootState) => store.theme);
  const dispatch: AppDispatch = useDispatch();

  const navVariant = {
    hidden: { y: -1000, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
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
          ? "relative z-20 p-4 flex flex-col overflow-hidden items-center justify-center  bg-blBackgroundElement border-b-2 border-blBorder h-fit w-full top-[-25px]"
          : "relative z-20 p-4 flex flex-col overflow-hidden items-center justify-center bg-lgBackgroundElement border-b-2 border-lgBorder h-fit w-full top-[-25px] "
      }
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="self-end mr-6 cursor-pointer text-3xl hover:opacity-70 active:opacity-50"
        onClick={() => dispatch(setCloseMenu())}
        color="#12A594"
      />
      <motion.button
        variants={buttonVariant}
        className={
          choice === null
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement  `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToHome());
          dispatch(setCloseMenu());
        }}
      >
        {language === "en" ? en.Menu.Home : fr.Menu.Home}
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "about Me"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToAboutMe());
          dispatch(setCloseMenu());
        }}
      >
        {language === "en" ? en.Menu.AboutMe : fr.Menu.AboutMe}
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "projects"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToProjects());
          dispatch(setCloseMenu());
        }}
      >
        {language === "en" ? en.Menu.Projects : fr.Menu.Projects}
      </motion.button>
      <SeparatorMenu />

      <motion.button
        variants={buttonVariant}
        className={
          choice === "courses"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToCourse());
          dispatch(setCloseMenu());
        }}
      >
        {language === "en" ? en.Menu.Courses : fr.Menu.Courses}
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "resources"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
        }
        onClick={() => {
          dispatch(goToResources());
          dispatch(setCloseMenu());
        }}
      >
        {language === "en" ? en.Menu.Resources : fr.Menu.Resources}
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={
          choice === "contacts"
            ? theme === "dark"
              ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  bg-blSelectedBackgroundElement  hover:bg-blHoverBackgroundElement `
              : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 bg-lgSelectedBackgroundElement  hover:bg-lgHoverBackgroundElement  `
            : theme === "dark"
            ? ` text-blTextMin text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2  hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin  text-xl w-fit active:opacity-70 relative px-5 py-3 rounded-full my-2 hover:bg-lgHoverBackgroundElement `
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
