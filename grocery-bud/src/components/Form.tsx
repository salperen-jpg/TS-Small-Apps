import { useState, useEffect } from 'react';
import { GroceryType } from '../App';

interface FormType {
  toggleAlert: (a: boolean, b: string, c: string) => void;
  isEditing: boolean;
  addGrocery: (name: string) => void;
  finishEditing: (name: string) => void;
  editingID: string | null;
  groceries: GroceryType[];
}

const Form: React.FC<FormType> = ({
  toggleAlert,
  isEditing,
  addGrocery,
  finishEditing,
  groceries,
  editingID,
}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      toggleAlert(true, 'enter some value', 'danger');
      return;
    }
    if (isEditing) {
      finishEditing(name);
      setName('');
      return;
    }
    addGrocery(name);
    setName('');
  };

  useEffect(() => {
    if (isEditing) {
      const spec = groceries.find((grocery) => grocery.id === editingID);
      setName(groceries.find((grocery) => grocery.id === editingID)?.name!);
    }
  }, [editingID]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='input-form'
        value={name}
        placeholder='Enter grocery...'
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit' className='btn submit-btn'>
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};
export default Form;
