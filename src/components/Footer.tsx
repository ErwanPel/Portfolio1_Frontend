import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export default function Footer() {
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
        Made by <strong>Erwan Pellerin</strong> with{" "}
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
