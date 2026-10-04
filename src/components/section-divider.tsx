import { motion } from "motion/react";
import type { FC } from "react";

export const SectionDivider: FC = () => (
  <motion.div
    aria-hidden
    className="bg-gray-200 my-5 h-16 w-1 rounded-full hidden sm:block dark:bg-gray-200/20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
  />
);
