import { useContext, createContext, useState } from 'react';

interface ContextProp {
  formInputs: {
    bill: number;
    tip: null | number;
    numberOfPeople: number;
  };
}

const TipContext = createContext<ContextProp | null>({
  formInputs: {
    bill: 0,
    tip: 0,
    numberOfPeople: 0,
  },
});

interface ChildrenProp {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  const [formInputs, setFormInputs] = useState({
    bill: 0,
    tip: 0,
    numberOfPeople: 0,
  });

  return (
    <TipContext.Provider value={{ formInputs }}>{children}</TipContext.Provider>
  );
};

export const useTipContext = () => useContext(TipContext);
