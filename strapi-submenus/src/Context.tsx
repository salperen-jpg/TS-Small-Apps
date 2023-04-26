import { createContext, useContext, useState } from 'react';

interface ChildrenProp {
  children: React.ReactNode;
}

interface ContextProp {
  isSidebarOpen: boolean;
}

const StrapiContext = createContext({
  isSidebarOpen: false,
});

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StrapiContext.Provider value={{ isSidebarOpen }}>
      {children}
    </StrapiContext.Provider>
  );
};

export const useStrapiContext = () => useContext(StrapiContext);
