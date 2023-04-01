import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useQuizContext } from './context/context';
import Form from './components/Form';
import Modal from './components/Modal';
import Timer from './components/Timer';

function App() {
  const { isFormShown, questions, correct, index, checkAnswer } =
    useQuizContext();

  if (isFormShown) {
    return (
      <main>
        <Form />
      </main>
    );
  }

  const { category, difficulty, question, incorrect_answers, correct_answer } =
    questions[index];

  const options = [...incorrect_answers, correct_answer];
  return (
    <main>
      <Modal />
      {/* <Timer /> */}
      <div className='container question-display'>
        <div className='header'>
          <h4 className='category'>
            {category} / {difficulty}
          </h4>
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
                  className='btn answer-btn'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: option }}
                  onClick={() => checkAnswer(option === correct_answer)}
                />
              );
            })}
          </div>
        </div>
        <div className='next'>
          <button className='btn next-btn'>next question</button>
        </div>
      </div>
    </main>
  );
}

export default App;
