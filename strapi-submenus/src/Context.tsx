import { createContext, useContext, useState } from 'react';

interface ChildrenProp {
  children: React.ReactNode;
}

interface ContextProp {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  submenuId: number | null;
  setSubmenuId: (val: any) => void;
}

const StrapiContext = createContext<ContextProp>({
  isSidebarOpen: false,
  toggleSidebar() {},
  submenuId: null,
  setSubmenuId() {},
});

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [submenuId, setSubmenuId] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <StrapiContext.Provider
      value={{ isSidebarOpen, toggleSidebar, submenuId, setSubmenuId }}
    >
      {children}
    </StrapiContext.Provider>
  );
};

export const useStrapiContext = () => useContext(StrapiContext);
