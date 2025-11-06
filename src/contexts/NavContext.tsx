import React, { createContext, useContext, useState, useMemo } from "react";

interface NavContextValue {
  activeLink: string;
  setActiveLink: (href: string) => void;
}

const NavContext = createContext<NavContextValue | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>("/");

  const value = useMemo(() => ({ activeLink, setActiveLink }), [activeLink]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = (): NavContextValue => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
};


