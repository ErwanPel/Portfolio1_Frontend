import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

type GroupFormProps = {
  children: ReactNode;
};

export default function GroupForm({ children }: GroupFormProps) {
  const { theme } = useSelector((store: RootState) => store.theme);
  return (
    <div
      className={
        theme === "dark"
          ? "w-[300px] sm:w-[400px] text-blTextMin  flex flex-col gap-y-4 items-start"
          : "w-[300px] sm:w-[400px] text-lgTextMax   flex flex-col gap-y-4 items-start"
      }
    >
      {children}
    </div>
  );
}
