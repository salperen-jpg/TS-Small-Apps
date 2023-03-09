import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import projectList from '../utils/ProjectList';
const Projects = () => {
  return (
    <Wrapper>
      <Title title='Projects' />
      <div className='section-center'>
        {projectList.map((project) => {
          const { id, title, techs, image } = project;
          return (
            <article key={id} className={`project-container ${id}`}>
              <img src={image} alt='' />
              <div className='info'>
                <h4>{title}</h4>
                <div className='techs'>
                  {techs.map((t, index) => {
                    return <span key={index}>{t}</span>;
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Projects;
