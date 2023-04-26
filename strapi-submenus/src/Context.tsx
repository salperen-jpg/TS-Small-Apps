import { createContext, useContext, useState } from 'react';

interface ChildrenProp {
  children: React.ReactNode;
}

interface ContextProp {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const StrapiContext = createContext<ContextProp>({
  isSidebarOpen: false,
  toggleSidebar() {},
});

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <StrapiContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </StrapiContext.Provider>
  );
};

export const useStrapiContext = () => useContext(StrapiContext);
