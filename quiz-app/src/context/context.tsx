import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}

interface ContextProps {
  isLoading: boolean;
  isFormShown: boolean;
  questions: Question[];
  isError: boolean;
}

const QuizContext = createContext<ContextProps>({
  isLoading: false,
  isFormShown: true,
  questions: [],
  isError: false,
});

interface ChildrenProp {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormShown, setIsFormShown] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isError, setIsError] = useState(false);
  const url =
    'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

  const fetchQuestions = async (url: string) => {
    try {
      const {
        data: { results },
      } = await axios(url);
      console.log(results);
      if (results.length > 0) {
        setQuestions(results);
        setIsLoading(false);
        setIsFormShown(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchQuestions(url);
  }, []);

  return (
    <QuizContext.Provider
      value={{ isLoading, isFormShown, questions, isError }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
