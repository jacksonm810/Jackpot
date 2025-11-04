import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isLeftSidebarVisible: boolean;
  setIsLeftSidebarVisible: (visible: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(true);

  return (
    <SidebarContext.Provider value={{ isLeftSidebarVisible, setIsLeftSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
