"use client";

import { ProviderProps } from "interfaces/Provider";
import { NAV_SECTIONS, SectionId } from "data/navigation";
import { scrollToSection, useActiveSection } from "hooks/useActiveSection";
import React, { createContext, useCallback, useContext, useMemo } from "react";

type NavContextValue = {
  sections: typeof NAV_SECTIONS;
  activeSection: SectionId;
  scrollTo: (id: SectionId) => void;
};

const NavContext = createContext<NavContextValue>({
  sections: NAV_SECTIONS,
  activeSection: "hero",
  scrollTo: () => {},
});

export const useNav = () => useContext(NavContext);

const NavProvider = ({ children }: ProviderProps) => {
  const sectionIds = useMemo(
    () => NAV_SECTIONS.map((section) => section.id),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  const scrollTo = useCallback((id: SectionId) => {
    scrollToSection(id);
  }, []);

  return (
    <NavContext.Provider
      value={{ sections: NAV_SECTIONS, activeSection, scrollTo }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
