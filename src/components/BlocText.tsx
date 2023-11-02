import { ReactNode } from "react";

type BlocTextChildrenProps = {
  children: ReactNode;
};

export default function BlocText({ children }: BlocTextChildrenProps) {
  return (
    <article className="text-justify mb-4 text-lg text-lgTextMax bg-lgBackgroundElement p-4 rounded-3xl">
      {children}
    </article>
  );
}
