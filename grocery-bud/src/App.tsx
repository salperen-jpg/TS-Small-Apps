import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import Alert from './components/Alert';
import { getFromLocalStorage } from './localStorage';

interface Grocery {
  name: string;
  isDone: boolean;
  id: string;
}

function App() {
  const [name, setName] = useState('');
  const [groceries, setGroceries] = useState<Grocery[]>(getFromLocalStorage());
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
        <div className='title'>
          <h2>Grocery bud</h2>
        </div>
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
        <div className='grocery-list'>
          {groceries.map((grocery) => {
            const { id, name, isDone } = grocery;
            return (
              <article key={id} className='grocery'>
                <div className='left-side'>
                  <input
                    type='checkbox'
                    checked={isDone}
                    onChange={() => toggleIsDone(id)}
                  />
                  <span
                    style={{ textDecoration: isDone ? 'line-through' : 'none' }}
                  >
                    {name}
                  </span>
                </div>
                <div className='btn-container'>
                  <button className='btn edit-btn' onClick={() => setID(id)}>
                    <MdEditSquare />
                  </button>
                  <button
                    className='btn delete-btn'
                    onClick={() => deleteGrocery(id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
