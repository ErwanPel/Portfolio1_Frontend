import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../features/store";
import { setCloseMenu } from "../features/menuMobile/menuMobile";

type SectionComponentChildrenProps = {
  children: ReactNode;
};

export default function SectionComponents({
  children,
}: SectionComponentChildrenProps) {
  const { choice } = useSelector((store: RootState) => store.category);
  const { openMenu } = useSelector((store: RootState) => store.menu);
  const dispatch: AppDispatch = useDispatch();

  return (
    <motion.section
      key={choice}
      animate={{
        y: [1000, 0],
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 45,
        },
      }}
      className={
        openMenu
          ? "blur-sm mt-[150px] sm:mt-[300px]"
          : "mt-[150px] sm:mt-[300px]"
      }
      onClick={() => openMenu && dispatch(setCloseMenu())}
    >
      {children}
    </motion.section>
  );
}
