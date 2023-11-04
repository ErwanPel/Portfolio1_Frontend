import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type titleProps = {
  title: string;
};

export default function TitleLevel2({ title }: titleProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <h2
      className={
        theme === "dark"
          ? "text-center text-3xl  text-blTextMin m-8"
          : "text-center text-3xl text-lgTextMin  m-8"
      }
    >
      {title}
    </h2>
  );
}
