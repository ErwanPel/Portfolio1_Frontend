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
      className="flex overflow-hidden items-center justify-center bg-lgBackgroundElement dark:bg-blBackgroundElement  border-2 rounded-3xl border-lgBorder dark:border-blBorder"
    >
      <motion.button
        variants={buttonVariant}
        className={
          choice === null
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
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
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32   py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement`
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
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32   py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement`
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
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32   py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement`
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
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32   py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement`
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
            ? `text-lgTextMin dark:text-blTextMin text-xl w-32 py-3 bg-lgSelectedBackgroundElement dark:bg-blSelectedBackgroundElement hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement `
            : `text-lgTextMin dark:text-blTextMin text-xl w-32   py-3 hover:bg-lgHoverBackgroundElement dark:hover:bg-blHoverBackgroundElement`
        }
        onClick={() => dispatch(goToContacts())}
      >
        Contacts
      </motion.button>
    </motion.nav>
  );
}
