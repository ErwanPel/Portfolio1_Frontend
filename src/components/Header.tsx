import NavMenu from "./NavMenu";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import {
  faMoon,
  faSun,
  faEllipsisVertical,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

import { setLightMode, setDarkMode } from "../features/theme/theme";
import { setOpenMenu, setCloseMenu } from "../features/menuMobile/menuMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenuDropDown from "./navMenuDropDown";
import { setEnglish, setFrench } from "../features/translate/translate";

export default function Header() {
  const { openMenu } = useSelector((store: RootState) => store.menu);
  const { language } = useSelector((store: RootState) => store.language);
  const { theme } = useSelector((store: RootState) => store.theme);
  const dispatch: AppDispatch = useDispatch();

  const handleToggleTheme = () => {
    if (theme === "light" || theme === "null") dispatch(setDarkMode());
    else dispatch(setLightMode());
  };

  return (
    <>
      <header
        className={
          theme === "dark"
            ? "w-screen bg-blBackground py-6 absolute"
            : "w-screen bg-lgBackground py-6 absolute"
        }
      >
        {openMenu && <NavMenuDropDown />}
        <div
          className={
            theme === "dark"
              ? "h-[150px] container sm:w-[1024px] sm:mx-auto  bg-blBackground text-3xl flex flex-col items-center justify-center active:opacity-70"
              : "h-[150px] container sm:w-[1024px] sm:mx-auto bg-lgBackground text-3xl flex flex-col items-center justify-center active:opacity-70"
          }
        >
          {!openMenu && (
            <nav className="flex w-full justify-between items-center mb-12">
              <div className="flex items-center gap-x-12">
                <button
                  onClick={handleToggleTheme}
                  className={
                    theme === "dark"
                      ? "self-start  ml-8 hover:bg-blHoverBackgroundElement px-4 py-2 rounded-3xl"
                      : "self-start  ml-8 hover:bg-lgHoverBackgroundElement px-4 py-2 rounded-3xl"
                  }
                >
                  {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} color="#0BD8B6" />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} color="#008573" />
                  )}
                </button>
                <button
                  className={
                    theme === "dark"
                      ? "border p-2 flex items-center gap-x-4 rounded-2xl bg-blBackgroundElement border-blTextMax hover:bg-blHoverBackgroundElement active:opacity-70"
                      : "border p-2 flex items-center gap-x-4 rounded-2xl bg-lgBackgroundElement border-lgTextMax hover:bg-lgHoverBackgroundElement active:opacity-70"
                  }
                  onClick={() =>
                    language === "en"
                      ? dispatch(setFrench())
                      : dispatch(setEnglish())
                  }
                >
                  <FontAwesomeIcon
                    icon={faLanguage}
                    color={theme === "dark" ? "#0BD8B6" : "#008573"}
                  />
                  <span
                    className={
                      theme === "dark" ? "text-blTextMin" : "text-lgTextMin"
                    }
                  >
                    {language}
                  </span>
                </button>
              </div>

              <button
                onClick={() =>
                  openMenu ? dispatch(setCloseMenu()) : dispatch(setOpenMenu())
                }
                className={
                  theme === "dark"
                    ? "mr-14 sm:hidden hover:bg-blHoverBackgroundElement px-4 py-2 rounded-3xl"
                    : "mr-14 sm:hidden hover:bg-lgHoverBackgroundElement px-4 py-2 rounded-3xl"
                }
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  color={theme === "dark" ? "#0BD8B6" : "#008573"}
                />
              </button>
            </nav>
          )}

          <NavMenu />
        </div>
      </header>
    </>
  );
}
