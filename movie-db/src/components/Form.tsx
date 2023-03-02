import React from 'react';
import { useMovieDBContext } from '../Context';
import { MdOutlineSearch } from 'react-icons/md';
const Form = () => {
  const { query, handleQuery, isError } = useMovieDBContext();

  const handleSubmit = () => {};

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='search-form'>
            <input
              type='text'
              value={query}
              placeholder='Search for movie'
              onChange={(e) => handleQuery(e.target.value)}
            />
            <button type='button' className='search'>
              <MdOutlineSearch className='icon' />
            </button>
          </div>
        </div>
        {isError.show && <h5 className='error'>{isError.text}</h5>}
      </form>
    </div>
  );
};

export default Form;
