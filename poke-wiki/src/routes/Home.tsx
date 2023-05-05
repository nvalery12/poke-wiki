import { useEffect, useState } from 'react';
import { apiService } from '../components/api/apiService';
import Card from '../components/cards/card';
import Header from '../components/header';

export default function Home() {
  const [characters, updateCharacters] = useState([] as any);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await apiService(offset);
      updateCharacters([...characters, ...data.results]);
    })();
  }, [offset]);

  //If the scroll is at the end of the page, load more characters
  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setOffset(offset + 20);
      }
    };
  });

  if (characters.length === 0) {
    return <h1>Loading...</h1>;
  }

  function handleClick() {
    setOffset(offset + 28);
  }
  return (
    <div className='w-full bg-gray-900'>
      <Header />
      <div className='grid grid-cols-4 gap-4 w-3/4 mx-auto pt-6 pb-2 pl-10'>
        {characters.map((character: any) => {
          return <Card key={character.name} data={character} />;
        })}
      </div>
      <div className='w-52 mx-auto py-5'>
        <button onClick={handleClick} className='py-3 px-2 bg-blue-700 shadow-2xl rounded-sm w-52'>
          Load more
        </button>
      </div>
    </div>
  );
}
