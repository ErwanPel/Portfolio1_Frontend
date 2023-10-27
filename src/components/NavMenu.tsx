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

export default function NavMenu() {
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
    hidden: { x: 1000 },
    show: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="show"
      className="flex overflow-hidden flex-col items-center justify-center bg-lgBackgroundElement w-60 border-2 rounded-3xl border-lgBorder "
    >
      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToHome())}
      >
        Home
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToAboutMe())}
      >
        About Me
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToProjects())}
      >
        Projects
      </motion.button>
      <SeparatorMenu />

      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToCourse())}
      >
        Courses
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToResources())}
      >
        Resources
      </motion.button>
      <SeparatorMenu />
      <motion.button
        variants={buttonVariant}
        className={`text-lgText  text-xl w-60   py-6`}
        onClick={() => dispatch(goToContacts())}
      >
        Contacts
      </motion.button>
    </motion.nav>
  );
}
