import { FaSearch } from "react-icons/fa";
import { useDictionaryApp } from "../context";
import { styled } from "styled-components";
const Form = () => {
  const { fetchDefinition } = useDictionaryApp();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("clicked");

    const inputVal = event.target!.elements!.word.value;
    if (!inputVal) return;
    fetchDefinition(inputVal);
  };

  return (
    <Wrapper>
      <form className='section-center' onSubmit={handleSubmit}>
        <div className='form-container'>
          <input
            type='text'
            name='word'
            className='form-input'
            placeholder='search for keyword...'
          />
          <button type='submit' className='btn submit-btn'>
            <FaSearch />
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Form;

const Wrapper = styled.section`
  .form-container {
    position: relative;
    height: 4rem;
  }

  .form-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 4rem;
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    font-family: inherit;
    letter-spacing: 1.5px;
    font-size: 1rem;
    font-weight: 700;
    border: transparent;
    outline: none;
    background-color: var(--grey-100);
  }
  .form-input:focus {
    border: 2px solid var(--primary-900);
  }
  .form-input::placeholder {
    text-transform: capitalize;
  }

  .submit-btn {
    position: absolute;
    padding: 0.5rem 1rem;
    display: block;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: transparent;

    color: var(--primary-900);
    svg {
      font-size: 1.5rem;
    }
  }
`;
