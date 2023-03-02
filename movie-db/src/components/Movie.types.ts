export type Movie = {
  title: string;
  year: string;
  img?: string;
  type: string;
  id: string;
};

export type ContextType = {
  query?: string;
  movies?: Movie[];
  isLoading: boolean;
  handleQuery: (text: string) => void;
  isError: { show: boolean; text: string };
};
