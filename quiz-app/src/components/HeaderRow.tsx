import React from 'react';

interface HeaderRowProps {
  text: string;
  icon: React.ReactNode;
}

const HeaderRow: React.FC<HeaderRowProps> = ({ icon, text }) => {
  return (
    <div className='header-row'>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default HeaderRow;
