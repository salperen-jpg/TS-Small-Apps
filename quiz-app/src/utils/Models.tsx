export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

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
