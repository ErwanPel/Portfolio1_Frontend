import NavMenu from "./components/NavMenu";
import BlocContent from "./components/BlocContent";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className=" w-screen bg-lgBackground">
        <div className=" flex items-center justify-between px-8 container w-[1024px] min-h-screen mx-auto overflow-hidden">
          <AnimatePresence>
            <BlocContent />
          </AnimatePresence>
          <NavMenu />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

// const select = selectMenu(choice);
// return select;
