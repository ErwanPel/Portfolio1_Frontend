import BlocContent from "./components/BlocContent";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main
        className="w-screen dark:bg-blBackground
           bg-lgBackground "
      >
        <div className=" flex items-start justify-center px-8  min-h-screen mx-auto overflow-hidden py-12">
          <AnimatePresence>
            <BlocContent />
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
