import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export default function SeparatorMenu() {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <div
      className={
        theme === "dark"
          ? "border  border-blElementSeparator h-full"
          : "border border-lgElementSeparator  h-full"
      }
    ></div>
  );
}
