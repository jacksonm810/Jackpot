import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarContextType {
  isLeftSidebarVisible: boolean;
  setIsLeftSidebarVisible: (visible: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const SIDEBAR_BREAKPOINT = 1520; // Hide sidebar below this width

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(() => {
    // Initialize based on current window width
    if (typeof window !== 'undefined') {
      return window.innerWidth >= SIDEBAR_BREAKPOINT;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      const shouldShowSidebar = window.innerWidth >= SIDEBAR_BREAKPOINT;
      setIsLeftSidebarVisible(shouldShowSidebar);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call once to set initial state
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
