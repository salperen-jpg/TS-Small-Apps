interface TitleProp {
  title: string;
}
import React from 'react';
import styled from 'styled-components';

const Title: React.FC<TitleProp> = ({ title }) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <div className='underline'></div>
    </div>
  );
};

export default Title;
