import React from 'react';
import { useNewsContext } from '../context/context';
import Loading from './Loading';

const News = () => {
  const { isLoading, hits, removeFromUI } = useNewsContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='news'>
      {hits.map((hit) => {
        const { author, title, num_comments, objectID, url, points } = hit;
        return (
          <article key={objectID} className='new'>
            <h4>{title}</h4>
            <span className='author'>@{author}</span>
            <p>
              {num_comments} comments | {points} points made
            </p>
            <div className='button-container'>
              <a href={url} className='btn read' target='_blank'>
                read more
              </a>
              <button
                type='button'
                className='btn remove'
                onClick={() => removeFromUI(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default News;
