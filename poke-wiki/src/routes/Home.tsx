import Card from '../components/cards/card';
import Header from '../components/header';
import Loader from '../components/loader';
import { useCharacter } from '../hooks/useCharacter';
import { useEffect } from 'react';
import type { Character } from '../hooks/useCharacter';

export default function Home() {
  const { characters,nextPage, isLoading } = useCharacter();

  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        nextPage();
      }
    };
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='w-full bg-gray-900'>
      <Header />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 mx-auto pt-6 pb-2'>
        {characters.map((character: Character) => {
          return <Card key={character.name} {...character} />;
        })}
      </div>
    </div>
  );
}
