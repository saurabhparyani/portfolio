import type { FC, PropsWithChildren } from "react";

export const SectionHeading: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-6xl font-medium capitalize mb-8 text-center">
    {children}
  </h2>
);
