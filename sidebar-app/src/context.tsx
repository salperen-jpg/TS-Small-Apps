import { useState, useContext, createContext } from 'react';

interface ContextProp {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  toggleSidebar: () => void;
  toggleModal: () => void;
}

const UIContext = createContext<ContextProp>({
  isSidebarOpen: false,
  isModalOpen: false,
  toggleModal: () => {},
  toggleSidebar: () => {},
});

interface ChildrenProp {
  children: React.ReactNode;
}

const AppProvider = ({ children }: ChildrenProp) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((oldState) => !oldState);
  };
  const toggleModal = () => {
    setIsModalOpen((oldState) => !oldState);
  };
  return (
    <UIContext.Provider
      value={{ isSidebarOpen, isModalOpen, toggleModal, toggleSidebar }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export { useUIContext, AppProvider };
