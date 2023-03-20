import styled from 'styled-components';
import projectList from '../utils/ProjectList';
import Title from './Title';

const Projects2 = () => {
  return (
    <Wrapper id='Projects'>
      <Title title='Projects' />
      <div className='section-center project-list'>
        {projectList.map((project) => {
          const { id, title, techs, image, exp, live, repo } = project;
          return (
            <article key={id} className='project'>
              <img src={image} className='project-img' alt={title} />
              <div className='info'>
                <h4>{title}</h4>
                {exp}
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
              <div className='btn-container'>
                <a href={live} className='btn live-btn'>
                  live
                </a>
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
  .project-list {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 7rem 13rem;
  }
  .project {
    position: relative;
    border-radius: var(--radius);
    background: var(--clr-primary-500);
  }
  .project::after,
  .project::before {
    content: '';
    position: absolute;
    inset: -0.5rem;
    z-index: -1;
    background: conic-gradient(
      from var(--gradient-angle),
      var(--blueish),
      var(--pinkish)
    );
    border-radius: inherit;
    animation: rotation 20s linear infinite;
  }
  .card::after {
    filter: blur(5rem);
  }
  @property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
  .project img {
    height: 17rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .info {
    padding: 1rem 0.5rem;
    h4 {
      margin-bottom: 1rem;
      color: var(--white);
    }
    p {
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .techs {
      display: flex;

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
  }
  .btn-container {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    .live-btn {
      background: linear-gradient(to right, var(--blueish), var(--pinkish));
    }
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

  @media (min-width: 800px) {
    .project-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Projects2;
