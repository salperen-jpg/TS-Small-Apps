import React from 'react';
import { useQuizContext } from '../context/context';

const Form = () => {
  const {
    quiz: { amount, difficulty, category },
    handleChange,
    handleSubmit,
    isLoading,
    isError,
  } = useQuizContext();

  const options = ['sports', 'history', 'politics'];
  const difficulties = ['easy', 'medium', 'hard'];

  return (
    <div className='container'>
      <form>
        <div className='title'>
          <h2>Quiz</h2>
          <div className='underline'></div>
        </div>
        <div className='form-row'>
          <label htmlFor='amount'>amount</label>
          <input
            type='text'
            id='amount'
            className='input-text'
            name='amount'
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='category'>category</label>
          <select
            name='category'
            id='category'
            value={category}
            onChange={handleChange}
          >
            {options.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-row'>
          <label htmlFor='difficulty'>difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            value={difficulty}
            onChange={handleChange}
          >
            {difficulties.map((difficulty, index) => {
              return (
                <option value={difficulty} key={index}>
                  {difficulty}
                </option>
              );
            })}
          </select>
        </div>
        {isError && (
          <div className='error'>
            <span>Can not start it , please try other values.</span>
          </div>
        )}
        <button type='submit' className='btn submit-btn' onClick={handleSubmit}>
          {isLoading ? <div className='loading'></div> : 'Start'}
        </button>
      </form>
    </div>
  );
};

export default Form;
