import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import AboutMe from "./AbouteMe";
import Projects from "./Projects";
import Courses from "./Courses";
import Resources from "./Resources";
import Contact from "./Contact";

export default function BlocContent() {
  const { choice } = useSelector((store: RootState) => store.category);
  if (choice === null) {
    return (
      <section className="w-2/3 bg-red-500">
        <div>Info</div>
      </section>
    );
  } else if (choice === "about Me") {
    return (
      <section className="w-2/3 bg-red-500">
        <AboutMe />
      </section>
    );
  } else if (choice === "projects") {
    return (
      <section className="w-2/3 bg-red-500">
        <Projects />
      </section>
    );
  } else if (choice === "courses") {
    return (
      <section className="w-2/3 bg-red-500">
        <Courses />
      </section>
    );
  } else if (choice === "resources") {
    return (
      <section className="w-2/3 bg-red-500">
        <Resources />
      </section>
    );
  } else if (choice === "contacts") {
    return (
      <section className="w-2/3 bg-red-500">
        <Contact />
      </section>
    );
  }
}
