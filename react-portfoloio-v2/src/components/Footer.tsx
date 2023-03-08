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
              <a href={link} key={id} className='social-link'>
                {icon}
              </a>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
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
  }
  .social-link {
    font-size: 1.5rem;
  }
  .social-link:hover {
    color: var(--white);
  }
`;

export default Footer;
