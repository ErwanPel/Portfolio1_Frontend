import { ReactNode } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { motion } from "framer-motion";

type SectionComponentChildrenProps = {
  children: ReactNode;
};

export default function SectionComponents({
  children,
}: SectionComponentChildrenProps) {
  const { choice } = useSelector((store: RootState) => store.category);

  return (
    <motion.section
      key={choice}
      animate={{
        y: [1000, 0],
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 55,
        },
      }}
      className="w-3/5 "
    >
      {children}
    </motion.section>
  );
}
