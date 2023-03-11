import React from 'react';
import styled from 'styled-components';
import socialLinks from '../utils/SocialLinks';

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-center'>
        <p>
          &copy; {new Date().getFullYear()} <span>salih alperen</span> all
          rights reserved
        </p>
        <ul className='social-links'>
          {socialLinks.map((l) => {
            const { id, icon, link } = l;
            return (
              <li key={id} className='social-link'>
                <a href={link} target='_blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 5rem;
  padding: 1rem 0;
  background: linear-gradient(to right, var(--blueish), var(--pinkish));

  .footer-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    text-transform: capitalize;
    color: var(--grey-50);
    letter-spacing: var(--spacing);
    margin-bottom: 1rem;
  }
  span {
    text-transform: uppercase;
    font-weight: 700;
  }
  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .social-link {
    font-size: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
  }
  a:hover {
    color: var(--white);
  }

  @media (min-width: 992px) {
    .footer-center {
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    }

    .social-link {
      font-size: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export default Footer;
