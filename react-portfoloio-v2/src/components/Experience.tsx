import React from 'react';
import styled from 'styled-components';
import { experince } from '../utils/Experience';
import Title from './Title';
const Experience = () => {
  const [exp, setExp] = React.useState(0);

  const { id, title, dates, duties, company } = experince[exp];

  return (
    <Wrapper id='Experience'>
      <Title title='Experience' />
      <div className='section-center'>
        {/* btn container */}
        <div className='btn-container'>
          {experince.map((e, index) => {
            return (
              <button
                key={index}
                className='btn experience-btn'
                onClick={() => setExp(index)}
              >
                {e.company}
              </button>
            );
          })}
        </div>
        {/* infos */}
        <div className='info'>
          <p className='job-title'>{title}</p>
          <p className='company'>{company}</p>
          <span className='dates'>{dates}</span>
          <div className='duties'>
            {duties.map((duty, index) => {
              return (
                <article key={index} className='duty'>
                  <div className='bullet-point'></div>
                  <p>{duty}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    text-align: center;
    h2 {
      margin-bottom: 0;
    }
    .underline {
      margin-bottom: 1.5rem;
      margin-inline: auto;
    }
  }
  .section-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .info {
    .job-title {
      font-size: 1.3rem;
      color: var(--grey-600);
      letter-spacing: var(--spacing);
      margin-bottom: 1rem;
    }
    .company {
      background-color: var(--grey-100);
      display: inline-block;
      padding: 0.375rem 0.775rem;
      border-radius: var(--radius);
      color: var(--grey-900);
      font-weight: 700;
      letter-spacing: var(--spacing);
    }
    .dates {
      display: block;
      margin: 1rem 0;
      color: var(--pinkish);
      letter-spacing: var(--spacing);
    }
    .duty {
      display: grid;
      grid-template-columns: 1rem 1fr;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 1.5rem;

      .bullet-point {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background: linear-gradient(to right, var(--blueish), var(--pinkish));
      }
      p {
        max-width: 40rem;
        line-height: 1.75;
      }
    }
  }
  @media (min-width: 992px) {
    .section-center {
      grid-template-columns: 200px 1fr;
      gap: 2rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;

export default Experience;
