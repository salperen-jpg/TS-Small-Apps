import { useContext, createContext, useState, useEffect } from 'react';

interface ContextProp {
  formInputs: {
    bill: number;
    tip: number;
    numberOfPeople: number;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>
  ) => void;
  isError: boolean;
  total: number;
  resetForm: () => void;
}

const TipContext = createContext<ContextProp>({
  formInputs: {
    bill: 0,
    tip: 0,
    numberOfPeople: 1,
  },
  handleChange() {},
  isError: false,
  total: 0,
  resetForm() {},
});

interface ChildrenProp {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  const [formInputs, setFormInputs] = useState({
    bill: 0,
    tip: 5,
    numberOfPeople: 0,
  });
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    const name = e.target.name;
    let value: string | number | undefined = e.target.value;
    if (name === 'tip') {
      value = e.target.dataset.tip;
    }
    setFormInputs({ ...formInputs, [name]: value });
  };

  const calculateBill = () => {
    setIsError(false);
    let totalPrice = 0;
    const { bill, tip, numberOfPeople } = formInputs;
    if (bill === 0 && numberOfPeople === 0) {
      setTotal(totalPrice);
      return;
    }
    if (+numberOfPeople === 0) {
      setIsError(true);
      return;
    }
    totalPrice = Number(bill) + (Number(bill) * tip) / 100;
    setTotal(totalPrice);
  };

  const resetForm = () => {
    setFormInputs({
      bill: 0,
      tip: 5,
      numberOfPeople: 0,
    });
  };

  useEffect(() => {
    calculateBill();
  }, [formInputs]);

  return (
    <TipContext.Provider
      value={{ formInputs, handleChange, isError, total, resetForm }}
    >
      {children}
    </TipContext.Provider>
  );
};

export const useTipContext = () => useContext(TipContext);
