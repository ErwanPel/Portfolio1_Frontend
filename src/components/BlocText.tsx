import { ReactNode } from "react";

type BlocTextChildrenProps = {
  children: ReactNode;
};

export default function BlocText({ children }: BlocTextChildrenProps) {
  return (
    <article className="text-justify my-8 text-lg text-lgTextMax dark:text-blTextMin bg-lgBackgroundElement dark:bg-blBackgroundElement p-4 rounded-3xl">
      {children}
    </article>
  );
}
