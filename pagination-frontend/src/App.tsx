import { useState, useEffect } from 'react';
import useFetch from './components/useFetch';
import { Person } from './components/Person.model';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
function App() {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState<Person[]>([]);
  const { isLoading, people } = useFetch(url);
  console.log(people);

  const handlePage = (newPage: number) => {
    setPage((oldState) => newPage);
  };
  useEffect(() => {
    if (isLoading) return;
    setFollowers(people[page]);
  }, [isLoading, page]);

  if (isLoading) {
    return (
      <main>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <section>
      <h1>{isLoading ? 'Loading' : 'Followers'}</h1>
      <div className='underline'></div>
      <div className='followers-center'>
        {followers.map((follower, index) => {
          return (
            <article key={index}>
              <img src={follower.avatar_url} />
              <h4>{follower.login}</h4>
            </article>
          );
        })}
      </div>
      <div className='btn-container'>
        {people.map((p, index) => {
          return (
            <button key={index} onClick={() => handlePage(index)}>
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default App;
