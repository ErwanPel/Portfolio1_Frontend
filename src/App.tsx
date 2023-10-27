import NavMenu from "./components/WindowNavigation";
import BlocContent from "./components/BlocContent";

// const selectMenu = (choice: string) => {
//   switch (choice) {
//     case "about me":
//       return <AboutMe />;
//     case "projects":
//       return <Projects />;
//     case "resources":
//       return <Resources />;
//     case "contact":
//       return <Contact />;
//     default:
//       return <p>Error</p>;
//   }
// };

function App() {
  return (
    <main className="h-screen w-screen bg-lgBackground">
      <div className=" flex items-center justify-between px-8 container w-[1024px] h-screen mx-auto">
        <BlocContent />
        <NavMenu />
      </div>
    </main>
  );
}

export default App;

// const select = selectMenu(choice);
// return select;
