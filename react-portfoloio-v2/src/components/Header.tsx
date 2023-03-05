import React from 'react';
// import headerImg from '../assets/header-img.jpg';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <div className='header-center'>
        <div className='header-info'>
          <h2>salih alperen</h2>
          <div className='underline'></div>
          <span className='title'>full stack web developer</span>
        </div>
        <div className='header-img'>
          {/* <img src={headerImg} alt='header img' /> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: calc(100vh - 5rem);
  display: grid;
  align-items: center;
  .header-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .header-info {
    h2 {
      text-transform: uppercase;
    }
  }
  .header-img {
    display: none;
  }
  .title {
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  @media (min-width: 992px) {
    .header-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .header-img {
      display: block;
      height: 400px;
      width: 400px;
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
        url('header.jpg') center/cover no-repeat;
      border-radius: 50%;
    }
  }
`;

export default Header;
