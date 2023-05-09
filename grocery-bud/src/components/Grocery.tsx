import { GroceryType } from '../App';
import { MdDelete, MdEditSquare } from 'react-icons/md';
interface GroType {
  toggleIsDone: (id: string) => void;
  setID: (id: string) => void;
  deleteGrocery: (id: string) => void;
  id: string;
  name: string;
  isDone: boolean;
}

const Grocery: React.FC<GroType> = ({
  id,
  name,
  isDone,
  toggleIsDone,
  setID,
  deleteGrocery,
}) => {
  return (
    <article key={id} className='grocery'>
      <div className='left-side'>
        <input
          type='checkbox'
          checked={isDone}
          onChange={() => toggleIsDone(id)}
        />
        <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
          {name}
        </span>
      </div>
      <div className='btn-container'>
        <button className='btn edit-btn' onClick={() => setID(id)}>
          <MdEditSquare />
        </button>
        <button className='btn delete-btn' onClick={() => deleteGrocery(id)}>
          <MdDelete />
        </button>
      </div>
    </article>
  );
};
export default Grocery;
