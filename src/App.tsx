import NavMenu from "./components/NavMenu";
import BlocContent from "./components/BlocContent";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <main className="h-screen w-screen bg-lgBackground">
      <div className=" flex items-center justify-between px-8 container w-[1024px] h-screen mx-auto overflow-hidden">
        <AnimatePresence>
          <BlocContent />
        </AnimatePresence>
        <NavMenu />
      </div>
    </main>
  );
}

export default App;

// const select = selectMenu(choice);
// return select;
