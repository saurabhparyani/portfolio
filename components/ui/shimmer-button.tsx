"use client";

import React, {
  CSSProperties,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme-context";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor,
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Set default colors based on theme and purple scheme
    const defaultShimmerColor =
      shimmerColor || (theme === "light" ? "#a855f7" : "#c084fc"); // purple-500/purple-400
    const defaultBackground =
      background || (theme === "light" ? "rgba(88, 28, 135, 1)" : "#37273F"); // purple-900/purple-800

    useEffect(() => {
      const element = buttonRef.current;
      if (!element) return;

      let angle = 0;
      let animationId: number;

      const rotate = () => {
        angle = (angle + 1) % 360;
        element.style.setProperty("--angle", `${angle}deg`);
        animationId = requestAnimationFrame(rotate);
      };

      rotate();

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, []);

    return (
      <button
        ref={(node) => {
          if (buttonRef) {
            (
              buttonRef as React.MutableRefObject<HTMLButtonElement | null>
            ).current = node;
          }
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
          }
        }}
        style={
          {
            "--angle": "0deg",
            "--shimmer-color": defaultShimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": defaultBackground,
            background: `linear-gradient(${defaultBackground}, ${defaultBackground}) padding-box, conic-gradient(from var(--angle, 0deg), transparent, var(--shimmer-color) 10%, transparent 20%) border-box`,
            borderRadius: borderRadius,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          "border-2 border-transparent px-6 py-3 text-white font-medium",
          "transform-gpu transition-all duration-300 ease-in-out hover:scale-105 active:translate-y-px",
          // Purple-themed hover effects
          theme === "light"
            ? "hover:shadow-lg hover:shadow-purple-500/25 text-white"
            : "hover:shadow-lg hover:shadow-purple-400/25 text-white",
          className
        )}
        {...props}
      >
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>

        {/* Inner glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
            "group-hover:opacity-20",
            theme === "light"
              ? "bg-gradient-to-r from-purple-400/20 to-purple-600/20"
              : "bg-gradient-to-r from-purple-300/20 to-purple-500/20"
          )}
          style={{ borderRadius: borderRadius }}
        />

        {/* Highlight overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "shadow-[inset_0_-8px_10px_rgba(255,255,255,0.1)]",
            "transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_rgba(255,255,255,0.2)]",
            "group-active:shadow-[inset_0_-10px_10px_rgba(255,255,255,0.2)]"
          )}
          style={{ borderRadius: borderRadius }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
