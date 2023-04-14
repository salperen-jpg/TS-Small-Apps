import React from 'react';
import SocialLinks from '../utils/SocialLinks';
import styled from 'styled-components';
const Socials = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Wrapper className='socials'>
      <div className={show ? 'btn-container show' : 'btn-container'}>
        {SocialLinks.map((singleLink) => {
          const { id, link, icon } = singleLink;
          return (
            <a key={id} href={link} target='_blank' className='btn inner-btn'>
              {icon}
            </a>
          );
        })}
      </div>
      <button
        type='button'
        className='btn main-btn'
        onClick={() => setShow(!show)}
      >
        <p className={show ? ' show' : ''}>+</p>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9;
  .btn {
    padding: 0;
    width: 2rem;
    height: 2rem;
    font-size: 1.25rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .main-btn p {
    transition: all 0.3s linear;
  }
  .main-btn > p.show {
    transform: rotate(45deg);
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(150%);
    opacity: 0;
    transition: var(--transition);
    margin-bottom: 1rem;
  }
  .show {
    transform: translateY(0);
    opacity: 1;
    display: flex;
  }
`;

export default Socials;
