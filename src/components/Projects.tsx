import { motion } from "framer-motion";

export default function Projects() {
  console.log("projects render");
  return (
    <motion.div className="text-3xl border-t-2 bg-lgBackgroundElement border-lgBorder ">
      <p>Projects</p>
    </motion.div>
  );
}
