import { useNewsContext } from '../context/context';

const SearchForm = () => {
  const { query, handleQuery } = useNewsContext();
  return (
    <form>
      <div className='form-row'>
        <input
          type='text'
          placeholder='Search for news...'
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
