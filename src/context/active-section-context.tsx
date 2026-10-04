import { createContext, useContext, useMemo, useState } from "react";
import type { Dispatch, FC, ReactNode, SetStateAction } from "react";

import type { SectionName } from "@/constants/content";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export const ActiveSectionContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
};
