import { motion } from "framer-motion";
import { useReducer } from "react";
import AboutMe from "./components/AbouteMe";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Contact from "./components/Contact";

type TActionReducer = {
  type: string;
};

const choiceReducer = (state: string, action: TActionReducer) => {
  switch (action.type) {
    case "About Me":
      return "about Me";
    case "Projects":
      return "projects";
    case "Resources":
      return "resources";
    case "Contact":
      return "contacts";
    default:
      return state;
  }
};

const selectMenu = (choice: string) => {
  switch (choice) {
    case "about me":
      return <AboutMe />;
    case "projects":
      return <Projects />;
    case "resources":
      return <Resources />;
    case "contact":
      return <Contact />;
    default:
      return <p>Error</p>;
  }
};

const arrayCategory = ["About Me", "Projects", "Resources", "Contacts"];

function App() {
  const [choice, dispatch] = useReducer(choiceReducer, "");
  selectMenu(choice);
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      {!choice ? (
        <nav className="flex flex-col  w-screen border-b-2 border-black">
          {arrayCategory.map((cat) => {
            return (
              <motion.div className="text-3xl border-t-2 border-black ">
                <button
                  className=" w-full py-16"
                  onClick={() => dispatch({ type: `${cat}` })}
                >
                  {cat}
                </button>
              </motion.div>
            );
          })}
        </nav>
      ) : (
        <AboutMe />
      )}
    </main>
  );
}

export default App;

// const select = selectMenu(choice);
// return select;
