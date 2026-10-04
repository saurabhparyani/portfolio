import { motion, useMotionTemplate, useSpring } from "motion/react";
import type { FC, MouseEvent, PropsWithChildren } from "react";

const SPRING = { stiffness: 500, damping: 100 };

export const Card: FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, SPRING);
  const mouseY = useSpring(0, SPRING);
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;

  const onMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl group md:gap-8 bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-100 hover:bg-purple-100/30 hover:border-purple-400/50 border-gray-200 dark:from-black/40 dark:via-zinc-900/40 dark:to-black/40 dark:hover:bg-purple-800/10 dark:hover:border-purple-200/50 dark:border-zinc-600"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br via-purple-200/10 dark:via-purple-100/10 opacity-100 transition duration-1000 group-hover:opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
      {children}
    </div>
  );
};
