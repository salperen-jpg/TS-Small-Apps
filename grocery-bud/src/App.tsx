import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Alert from './components/Alert';
import { getFromLocalStorage } from './localStorage';
import Groceries from './components/Groceries';
import Title from './components/Title';

export interface GroceryType {
  name: string;
  isDone: boolean;
  id: string;
}

function App() {
  const [name, setName] = useState('');
  const [groceries, setGroceries] = useState<GroceryType[]>(
    getFromLocalStorage()
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState<null | string>(null);
  const [isAlert, setIsAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      toggleAlert(true, 'enter some value', 'danger');
      return;
    }
    if (isEditing) {
      setGroceries(
        groceries.map((grocery) => {
          if (grocery.id === editingID) {
            return { ...grocery, name };
          } else {
            return grocery;
          }
        })
      );
      setName('');
      setEditingID(null);
      setIsEditing(false);
      toggleAlert(true, 'edited', 'success');
      return;
    }
    const newGrocery = {
      name,
      isDone: false,
      id: nanoid(),
    };
    setGroceries([...groceries, newGrocery]);
    setName('');
    toggleAlert(true, 'item added', 'success');
  };

  const toggleAlert = (show = false, msg = '', type = '') => {
    setIsAlert({ show, msg, type });
  };

  const deleteGrocery = (id: string) => {
    setGroceries(groceries.filter((grocery) => grocery.id !== id));
    toggleAlert(true, 'deleted', 'danger');
  };

  const setID = (id: string) => {
    setEditingID(id);
    setIsEditing(true);
    const specificGrocery = groceries.find((grocery) => grocery.id === id);
    setName(specificGrocery!.name);
  };

  const toggleIsDone = (id: string) => {
    setGroceries(
      groceries.map((grocery) => {
        if (grocery.id === id) {
          return { ...grocery, isDone: !grocery.isDone };
        } else {
          return grocery;
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries));
  }, [groceries]);

  return (
    <main>
      <div className='container'>
        {isAlert.show && <Alert {...isAlert} toggleAlert={toggleAlert} />}
        <Title />
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
        <Groceries
          groceries={groceries}
          toggleIsDone={toggleIsDone}
          setID={setID}
          deleteGrocery={deleteGrocery}
        />
      </div>
    </main>
  );
}

export default App;
