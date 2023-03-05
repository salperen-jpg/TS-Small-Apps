import React, { useContext, createContext, useState } from 'react';

interface ContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface childrenProp {
  children: React.ReactNode;
}

const PortfolioContext = createContext<ContextType>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const PortfolioProvider = ({ children }: childrenProp) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PortfolioContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
