import { useState, useEffect, MouseEvent } from 'react';
import { User as UserT } from './User.model';
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdPhone,
  MdPassword,
  MdDriveFileRenameOutline,
} from 'react-icons/md';
const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserT>({
    email: '',
    phone: '',
    name: '',
    location: '',
    password: '',
    picture: '',
    dob: '',
  });
  const [value, setValue] = useState('');
  const [property, setProperty] = useState('name');

  const fethUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const { results } = await response.json();
      const {
        email,
        phone,
        picture: { large },
        dob: { date },
        name: { first, last },
        login: { password },
        location: {
          street: { name, number },
        },
      } = results[0];
      const newUser: UserT = {
        email,
        phone,
        name: first + last,
        location: name + number,
        password,
        picture: large,
        dob: date,
      };
      setUser((prevUser) => newUser);
      setValue(name);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fethUser();
  }, []);

  const handleValues = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as Element).classList.contains('icon')) {
      const label = (e.target as HTMLButtonElement).dataset.label!;
      if (label === 'dob') {
        let newDate = new Date(user[label]).toString().substring(0, 15);
        setValue(newDate);
        return;
      }
      setProperty(label);
      setValue(user[label]);
    }
  };

  const { picture } = user;
  return (
    <div className='user'>
      <div className='gray-box'></div>
      <img src={picture} alt='' />
      <span>My {property} is</span>
      <span>{value}</span>
      <div className='icons'>
        <button className='icon' data-label='name' onMouseOver={handleValues}>
          <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
        </button>
        <button className='icon' data-label='email' onMouseOver={handleValues}>
          <MdOutlineEmail></MdOutlineEmail>
        </button>
        <button className='icon' data-label='dob' onMouseOver={handleValues}>
          <MdPassword></MdPassword>
        </button>
        <button
          className='icon'
          data-label='location'
          onMouseOver={handleValues}
        >
          <MdPhone></MdPhone>
        </button>
        <button className='icon' data-label='phone' onMouseOver={handleValues}>
          <MdOutlineLocationOn></MdOutlineLocationOn>
        </button>
        <button
          className='icon'
          data-label='password'
          onMouseOver={handleValues}
        >
          <MdPassword></MdPassword>
        </button>
      </div>
      <button
        type='button'
        className='main-btn'
        onClick={fethUser}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Random Person'}
      </button>
    </div>
  );
};

export default User;
