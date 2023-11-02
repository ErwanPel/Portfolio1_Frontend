import { ReactNode } from "react";

type GroupFormProps = {
  children: ReactNode;
};

export default function GroupForm({ children }: GroupFormProps) {
  return (
    <div className="w-[400px] text-lgTextMin dark:text-blTextMin  flex flex-col gap-y-4 items-start">
      {children}
    </div>
  );
}
