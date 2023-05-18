import { BsSearch } from 'react-icons/bs';
import { useDictionaryApp } from '../context';
const Form = () => {
  const { fetchDefinition } = useDictionaryApp();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const inputVal = event.target!.elements!.word.value;
    if (!inputVal) return;
    fetchDefinition(inputVal);
  };

  return (
    <section>
      <form className='section-center' onSubmit={handleSubmit}>
        <div className='form-container'>
          <input type='text' name='word' className='form-input' />
          <button type='submit' className='btn submit-btn'>
            <BsSearch />
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
