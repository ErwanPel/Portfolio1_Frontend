import NavMenu from "./NavMenu";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { setLightMode, setDarkMode } from "../features/theme/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const { theme } = useSelector((store: RootState) => store.theme);
  const dispatch: AppDispatch = useDispatch();

  const handleToggleTheme = () => {
    if (theme === "light" || theme === "null") dispatch(setDarkMode());
    else dispatch(setLightMode());
  };

  console.log(theme);
  return (
    <header
      className={
        theme === "dark"
          ? "w-screen bg-blBackground py-6"
          : "w-screen bg-lgBackground py-6"
      }
    >
      <div
        className={
          theme === "dark"
            ? "h-[150px] container w-[1024px] mx-auto  bg-blBackground text-3xl flex flex-col items-center justify-center"
            : "h-[150px] container w-[1024px]  mx-auto bg-lgBackground text-3xl flex flex-col items-center justify-center"
        }
      >
        <button onClick={handleToggleTheme} className="self-end mb-12">
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} color="#0BD8B6" />
          ) : (
            <FontAwesomeIcon icon={faMoon} color="#008573" />
          )}
        </button>
        <NavMenu />
      </div>
    </header>
  );
}
