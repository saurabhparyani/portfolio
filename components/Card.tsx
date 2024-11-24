"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={`overflow-hidden relative duration-700 border rounded-xl group md:gap-8 ${
        theme === "light"
          ? "bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-100 hover:bg-purple-100/30 hover:border-purple-400/50 border-gray-200"
          : "bg-gradient-to-tl from-black/40 via-zinc-900/40 to-black/40 hover:bg-purple-800/10 hover:border-purple-200/50 border-zinc-600"
      }`}
    >
      <div className="pointer-events-none">
        <div
          className={`absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(${
            theme === "light" ? "white" : "black"
          },transparent)]`}
        />
        <motion.div
          className={`absolute inset-0 z-10 bg-gradient-to-br opacity-100 transition duration-1000 group-hover:opacity-50 ${
            theme === "light" ? "via-purple-200/10" : "via-purple-100/10"
          }`}
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
