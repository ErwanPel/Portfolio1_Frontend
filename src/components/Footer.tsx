import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import en from "../translations/en/global.json";
import fr from "../translations/fr/global.json";

export default function Footer() {
  const { language } = useSelector((store: RootState) => store.language);
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <footer
      className={
        theme === "dark"
          ? "h-[200px]   text-blTextMax text-base flex flex-col gap-y-4 items-center w-screen  bg-blBackground  justify-center"
          : "h-[200px]  text-lgTextMax  text-base flex flex-col gap-y-4 items-center w-screen bg-lgBackground  justify-center"
      }
    >
      <p>
        {language === "en" ? en.Footer.first : fr.Footer.first}
        <strong>Erwan Pellerin</strong>{" "}
        {language === "en" ? en.Footer.second : fr.Footer.second}{" "}
        <span
          className={
            theme === "dark"
              ? " text-blTextMin text-lg"
              : "text-lgTextMin text-lg"
          }
        >
          ♥
        </span>
      </p>
      <p>©Copyright 2023 - Erwan Pellerin</p>
    </footer>
  );
}
