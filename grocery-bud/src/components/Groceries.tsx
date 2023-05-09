import { GroceryType } from '../App';
import Grocery from './Grocery';

interface GroceriesProp {
  groceries: GroceryType[];
  toggleIsDone: (id: string) => void;
  setID: (id: string) => void;
  deleteGrocery: (id: string) => void;
}

const Groceries: React.FC<GroceriesProp> = ({
  groceries,
  toggleIsDone,
  setID,
  deleteGrocery,
}) => {
  return (
    <div className='grocery-list'>
      {groceries.map((grocery) => {
        const { id, name, isDone } = grocery;
        return (
          <Grocery
            key={grocery.id}
            {...grocery}
            toggleIsDone={toggleIsDone}
            setID={setID}
            deleteGrocery={deleteGrocery}
          />
        );
      })}
    </div>
  );
};
export default Groceries;
