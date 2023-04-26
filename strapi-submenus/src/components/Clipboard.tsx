import { HiOutlineClipboard } from 'react-icons/hi';
const Clipboard = () => {
  return (
    <div className='clipboard-container'>
      <div className='clipboard'>
        <span>npx create-strapi-app@latest my-project </span>
        <button className='btn clipboard-btn'>
          <HiOutlineClipboard />
        </button>
      </div>
      <div className='btn-container'>
        <button type='button' className='btn get-btn'>
          get started
        </button>
        <button type='button' className='btn white-btn'>
          try the live demo
        </button>
      </div>
    </div>
  );
};
export default Clipboard;
