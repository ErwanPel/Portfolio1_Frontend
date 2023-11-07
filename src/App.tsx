import BlocContent from "./components/BlocContent";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../src/features/store";

function App() {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <>
      <Header />
      <main
        className={
          theme === "dark"
            ? "w-screen bg-blBackground"
            : "w-screen  bg-lgBackground"
        }
      >
        <div className=" flex items-start container w-[350px] lg:w-[760px] xl:w-[1024px] justify-center sm:px-8   min-h-screen mx-auto overflow-hidden py-12">
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
