import { useState, useEffect } from "react";
import { HiOutlineClipboard } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
let text = "npx create-strapi-app@latest my-project ";

const Clipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copiedClipboard = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(text);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isCopied]);
  return (
    <div className='clipboard-container'>
      <div className='clipboard'>
        <span>{text}</span>
        <button className='btn clipboard-btn' onClick={copiedClipboard}>
          {isCopied ? (
            <TiTick style={{ color: "green" }} />
          ) : (
            <HiOutlineClipboard />
          )}
        </button>
      </div>
      <div className='btn-container'>
        <button type='button' className='btn big-btn get-btn'>
          get started
        </button>
        <button type='button' className='btn big-btn white-btn'>
          try the live demo
        </button>
      </div>
    </div>
  );
};
export default Clipboard;
