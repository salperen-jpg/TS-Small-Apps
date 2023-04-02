import { Question } from './Models';

export interface ContextProps {
  isLoading: boolean;
  isFormShown: boolean;
  questions: Question[];
  isError: boolean;
  index: number;
  correct: number;
  nextQuestion: () => void;
  checkAnswer: (a: boolean) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  quiz: {
    amount: string;
    category: string;
    difficulty: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  fetchQuestions: (url: string) => void;
}

export const initialContextValues = {
  isLoading: false,
  isFormShown: true,
  questions: [],
  isError: false,
  index: 0,
  correct: 0,
  nextQuestion() {},
  checkAnswer() {},
  closeModal() {},
  isModalOpen: false,
  quiz: {
    amount: '20',
    category: 'sports',
    difficulty: 'easy',
  },
  handleChange: () => {},
  fetchQuestions: () => {},
  handleSubmit: () => {},
};

export interface ChildrenProp {
  children: React.ReactNode;
}
