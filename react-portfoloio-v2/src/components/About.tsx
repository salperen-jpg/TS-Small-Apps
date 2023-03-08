import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
      <div className='margin'></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .margin {
    min-height: 40vh;
  }
  h1 {
    text-align: center;
  }
  @media (min-width: 1300px) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      border-inline-start: 10px solid;
      border-block-start: 10px solid;
      border-image-source: radial-gradient(
        at bottom left,
        transparent 10%,
        var(--blueish),
        var(--pinkish),
        transparent 100%
      );
      border-image-slice: 1;
      transform: rotate(180deg);

      z-index: -1;
    }
  }
`;

export default Footer;
