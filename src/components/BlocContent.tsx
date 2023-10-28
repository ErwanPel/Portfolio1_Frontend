import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { motion } from "framer-motion";
import AboutMe from "./AbouteMe";
import Projects from "./Projects";
import Courses from "./Courses";
import Resources from "./Resources";
import Contact from "./Contact";
import Home from "./Home";

export default function BlocContent() {
  const { choice } = useSelector((store: RootState) => store.category);

  if (choice === null) {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        exit={{
          y: [0, 2000],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-3/5"
      >
        <Home />
      </motion.section>
    );
  } else if (choice === "about Me") {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-2/3 "
      >
        <AboutMe />
      </motion.section>
    );
  } else if (choice === "projects") {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-2/3 bg-red-500"
      >
        <Projects />
      </motion.section>
    );
  } else if (choice === "courses") {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-2/3 bg-red-500"
      >
        <Courses />
      </motion.section>
    );
  } else if (choice === "resources") {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-2/3 bg-red-500"
      >
        <Resources />
      </motion.section>
    );
  } else if (choice === "contacts") {
    return (
      <motion.section
        key={choice}
        animate={{
          y: [1000, 0],
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 55,
          },
        }}
        className="w-2/3 bg-red-500"
      >
        <Contact />
      </motion.section>
    );
  }
}
