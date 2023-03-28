import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ContextProps {
  isLoading: boolean;
  isFormShown: boolean;
  questions: Question[];
  isError: boolean;
  index: number;
  correct: number;
  nextQuestion: () => void;
  checkAnswer: (a: boolean) => void;
}

const QuizContext = createContext<ContextProps>({
  isLoading: false,
  isFormShown: true,
  questions: [],
  isError: false,
  index: 0,
  correct: 0,
  nextQuestion() {},
  checkAnswer() {},
});

interface ChildrenProp {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormShown, setIsFormShown] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isError, setIsError] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
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

  const nextQuestion = () => {
    setIndex((oldState) => {
      return oldState + 1;
    });
  };

  const checkAnswer = (opt: boolean) => {
    if (opt) {
      setCorrect((oldState) => {
        return oldState + 1;
      });
    }
    nextQuestion();
  };

  React.useEffect(() => {
    fetchQuestions(url);
  }, []);

  return (
    <QuizContext.Provider
      value={{
        nextQuestion,
        correct,
        index,
        isLoading,
        isFormShown,
        questions,
        isError,
        checkAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
