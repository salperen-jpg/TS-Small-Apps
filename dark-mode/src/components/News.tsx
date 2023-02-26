import articles from './data';
import moment from 'moment';
const News = () => {
  return (
    <section>
      {articles.map((article) => {
        const { id, title, date, length, snippet } = article;
        return (
          <article key={id}>
            <h4>{title}</h4>
            <span>
              {moment(date).format('dddd Do YYYY')} {length} min read
            </span>
            <p>{snippet}</p>
          </article>
        );
      })}
    </section>
  );
};

export default News;
