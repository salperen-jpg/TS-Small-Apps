import { useTipContext } from '../context';
import person from '../assets/icon-person.svg';
import dollar from '../assets/icon-dollar.svg';
const Form = () => {
  const {
    formInputs: { bill, numberOfPeople, tip },
    handleChange,
    isError,
  } = useTipContext();

  const tipOptions = [5, 10, 15, 25, 50];
  return (
    <form className='form'>
      <div className='form-action'>
        <label htmlFor='bill'>bill</label>
        <div className='input-container'>
          <div className='inner-container'>
            <img src={dollar} alt='dollar' className='inner-img' />
            <input
              type='text'
              className='input-element'
              value={bill}
              name='bill'
              id='bill'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='form-action'>
        <span>Select tip %</span>
        <div className='btn-container'>
          {tipOptions.map((t, index) => {
            return (
              <button
                type='button'
                name='tip'
                key={index}
                className={
                  t === +tip ? `btn tip-btn active-btn` : 'btn tip-btn'
                }
                data-tip={t}
                onClick={handleChange}
              >
                {t}%
              </button>
            );
          })}
        </div>
      </div>
      <div className='form-action'>
        <div className='people-header'>
          <label htmlFor='numberOfPeople'>Number of People</label>
          {isError && <span className='error'>can't be zero</span>}
        </div>
        <div className='input-container'>
          <div className='inner-container'>
            <img src={person} alt='person' className='inner-img' />
            <input
              type='text'
              className='input-element'
              value={numberOfPeople}
              name='numberOfPeople'
              id='numberOfPeople'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
