import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type BlocTextChildrenProps = {
  children: ReactNode;
};

export default function BlocText({ children }: BlocTextChildrenProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <article
      className={
        theme === "dark"
          ? "text-justify my-8 text-lg  text-blTextMin bg-blBackgroundElement p-4 rounded-3xl"
          : "text-justify my-8 text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl"
      }
    >
      {children}
    </article>
  );
}
