import dollar from '../assets/icon-dollar.svg';
import { useTipContext } from '../context';
const Total = () => {
  const {
    total,
    formInputs: { numberOfPeople, bill },
    isError,
    resetForm,
  } = useTipContext();

  const tipAmountPerPerson =
    (total - Number(bill)) / numberOfPeople
      ? ((total - Number(bill)) / numberOfPeople).toFixed(2)
      : '0.00';

  const totalPerPerson =
    total / numberOfPeople ? (total / numberOfPeople).toFixed(2) : '0.00';
  return (
    <div className='review'>
      <div className='amount tip-amount'>
        <div>
          <h4>tip amount</h4>
          <span>/ person</span>
        </div>
        <h1>
          <img src={dollar} alt='dollar' />
          {isError ? '0.00' : tipAmountPerPerson}
        </h1>
      </div>
      <div className='amount tip-amount'>
        <div>
          <h4>total</h4>
          <span>/ person</span>
        </div>
        <h1>
          <img src={dollar} alt='dollar' />
          {isError ? '0.00' : totalPerPerson}
        </h1>
      </div>
      <button className='btn reset-btn' onClick={resetForm}>
        reset
      </button>
    </div>
  );
};
export default Total;
