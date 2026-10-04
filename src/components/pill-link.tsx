import type { ComponentProps, FC } from "react";

/** A rounded, bordered link that lifts and turns brass on hover. */
export const PillLink: FC<ComponentProps<"a">> = ({
  children,
  className,
  ...props
}) => (
  <a
    {...props}
    className={`flex h-10 items-center gap-2 rounded-full border border-rule bg-panel px-4 text-sm font-medium transition hover:-translate-y-0.5 hover:border-brass hover:text-brass ${className ?? ""}`}
  >
    {children}
  </a>
);
