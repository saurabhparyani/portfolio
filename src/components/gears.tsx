import { motion, useScroll, useTransform } from "motion/react";
import type { FC } from "react";

/** Builds an SVG path for a gear with `teeth` teeth, centred on (0, 0). */
const gearPath = (teeth: number, outer: number, inner: number): string => {
  const step = (Math.PI * 2) / teeth;
  const points: string[] = [];

  for (let tooth = 0; tooth < teeth; tooth++) {
    const angle = tooth * step;
    // Each tooth: root, rise, flat top, fall.
    const corners = [
      [inner, angle],
      [outer, angle + step * 0.15],
      [outer, angle + step * 0.45],
      [inner, angle + step * 0.6],
    ] as const;
    for (const [radius, theta] of corners) {
      points.push(
        `${(radius * Math.cos(theta)).toFixed(2)},${(radius * Math.sin(theta)).toFixed(2)}`,
      );
    }
  }

  return `M${points.join("L")}Z`;
};

const BIG_GEAR = gearPath(16, 100, 86);
const SMALL_GEAR = gearPath(10, 64, 52);

// The two gears mesh, so the small one turns faster and the other way.
export const Gears: FC = () => {
  const { scrollYProgress } = useScroll();
  const bigRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smallRotate = useTransform(scrollYProgress, [0, 1], [8, -568]);

  return (
    <svg
      aria-hidden
      viewBox="-110 -110 340 240"
      className="pointer-events-none fixed -right-24 -bottom-16 -z-10 w-[28rem] text-brass opacity-[0.12] sm:w-[36rem]"
    >
      <motion.g style={{ rotate: bigRotate }}>
        <path d={BIG_GEAR} fill="currentColor" />
        <circle r={58} className="fill-paper" />
        <circle r={14} fill="currentColor" />
      </motion.g>
      <motion.g style={{ x: 157, y: 0, rotate: smallRotate }}>
        <path d={SMALL_GEAR} fill="currentColor" />
        <circle r={30} className="fill-paper" />
        <circle r={10} fill="currentColor" />
      </motion.g>
    </svg>
  );
};
