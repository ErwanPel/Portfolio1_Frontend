import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type titleProps = {
  title: string;
};

export default function Title({ title }: titleProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <>
      <div className="relative w-fit mx-auto ">
        <h1
          className={
            theme === "dark"
              ? "text-center text-[42px]  text-blTextMax mb-16 z-1"
              : "text-center text-[42px] text-lgTextMax  mb-16 z-1"
          }
        >
          {title}
        </h1>
        <div
          className={
            theme === "dark"
              ? "bg-blBorder  w-16 h-2 rounded-lg absolute  top-16 left-7"
              : "bg-lgBorder  w-16 h-2 rounded-lg absolute  top-16 left-7"
          }
        ></div>
      </div>
    </>
  );
}
