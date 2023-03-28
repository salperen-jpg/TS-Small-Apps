import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useQuizContext } from './context/context';
import Form from './components/Form';

function App() {
  const {
    isLoading,
    isFormShown,
    questions,
    correct,
    index,
    nextQuestion,
    checkAnswer,
  } = useQuizContext();
  if (isFormShown) {
    return <Form />;
  }

  const { category, difficulty, question, incorrect_answers, correct_answer } =
    questions[index];

  const options = [...incorrect_answers, correct_answer];
  return (
    <main>
      <div className='question-display'>
        <div className='header'>
          <h4>{category}</h4>
          <h4>
            your score : {correct} / {index}
          </h4>
        </div>
        <div className='question'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {options.map((option, index) => {
              return (
                <button
                  type='button'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: option }}
                  onClick={() => checkAnswer(option === correct_answer)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
