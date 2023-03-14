import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import projectList from '../utils/ProjectList';
const Projects = () => {
  return (
    <Wrapper id='Projects'>
      <Title title='Projects' />
      <div className='section-center project-list'>
        {projectList.map((project) => {
          const { id, title, techs, image } = project;
          return (
            <article key={id} className={`project project-${id}`}>
              <img src={image} className='project-img' alt={title} />
              <div className='info'>
                <h4>{title}</h4>
                <div className='techs'>
                  {techs.map((t, index) => {
                    return (
                      <span key={index} className='tech'>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className='projects-link'>
        <a
          href='https://github.com/salperen-jpg'
          className='btn projects-btn'
          target='_blank'
        >
          See more
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 3rem;
  }
  .project {
    position: relative;
    background: var(--clr-primary-500);
  }
  .info {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s linear;
    z-index: 1;
    h4 {
      color: var(--white);
      letter-spacing: var(--spacing);
      margin-bottom: 0.5rem;
    }
  }
  .project:hover .info {
    opacity: 1;
  }
  .project-img {
    transition: all 0.3s linear;
    max-height: 17rem;
    object-fit: cover;
  }
  .project:hover .project-img {
    opacity: 0.1;
  }
  .project::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 5px solid transparent;
  }
  .project:hover::after {
    border-image-source: linear-gradient(
      to right,
      var(--blueish),
      var(--pinkish)
    );
    border-image-slice: 3;
    transform: scale(0.8);
  }

  .techs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .tech {
    background: var(--grey-100);
    padding: 0.25rem 0.3rem;
    border-radius: var(--radius);
    color: var(--grey-900);
  }
  .projects-link {
    text-align: center;
  }
  .projects-btn {
    text-align: center;
    margin: 5rem auto;
    padding: 1rem 1.75rem;
    border-radius: 0;
    font-family: var(--ff-secondary);
    letter-spacing: 0.1rem;
    outline: 2px solid var(--white);
    outline-offset: 0.5rem;
  }
  .projects-btn:hover {
    background: linear-gradient(to right, var(--blueish), var(--pinkish));
  }
  @media (min-width: 650px) {
    .section-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 992px) {
    .section-center {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 200px 200px;
      grid-template-areas:
        'a b b'
        'a c d';
    }
    .project-1 {
      grid-area: a;
    }
    .project-2 {
      grid-area: b;
    }
    .project-3 {
      grid-area: c;
    }
    .project-4 {
      grid-area: d;
    }
    .project {
      height: 100%;
    }
    .project-img {
      max-height: max-content;
      height: 100%;
    }
  }
`;

export default Projects;
