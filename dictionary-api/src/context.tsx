import { useContext, createContext } from 'react';

interface ChildrenProp {
  children: React.ReactNode;
}

const DictionaryContext = createContext('');

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <DictionaryContext.Provider value='dictionary app'>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryApp = () => useContext(DictionaryContext);
