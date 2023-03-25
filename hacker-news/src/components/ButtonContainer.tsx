import { useNewsContext } from '../context/context';

const ButtonContainer = () => {
  const { isLoading, page, handlePage } = useNewsContext();
  return (
    <section className='page-btn-container'>
      <button
        className='btn page-btn'
        onClick={() => handlePage('dec')}
        disabled={isLoading}
      >
        Prev
      </button>
      <span>{page + 1}</span>
      <button
        className='btn page-btn'
        onClick={() => handlePage('inc')}
        disabled={isLoading}
      >
        Next
      </button>
    </section>
  );
};

export default ButtonContainer;
