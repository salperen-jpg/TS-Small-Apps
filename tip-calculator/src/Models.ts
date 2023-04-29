export interface ChildrenProp {
  children: React.ReactNode;
}

export interface ContextProp {
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
