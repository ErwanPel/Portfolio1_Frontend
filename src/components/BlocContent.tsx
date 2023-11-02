import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import AboutMe from "./AbouteMe";
import Projects from "./Projects";
import Courses from "./Courses";
import Resources from "./Resources";
import Contact from "./Contact";
import Home from "./Home";

export default function BlocContent() {
  const { choice } = useSelector((store: RootState) => store.category);

  if (choice === null) {
    return <Home />;
  } else if (choice === "about Me") {
    return <AboutMe />;
  } else if (choice === "projects") {
    return <Projects />;
  } else if (choice === "courses") {
    return <Courses />;
  } else if (choice === "resources") {
    return <Resources />;
  } else if (choice === "contacts") {
    return <Contact />;
  }
}
