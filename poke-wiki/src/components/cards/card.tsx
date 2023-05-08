import { Link } from 'react-router-dom';
import { useCharacterCard } from '../../hooks/useCharacterCard';

interface Data {
    name: string;
    url: string;
}

export default function Card({name,url}: Data) {
  const id = url.split('/')[6];
  const {character, isLoading} = useCharacterCard(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if(!character) {
    return <h1>Character not found</h1>
  }

  return (
    <div className='w-64 bg-slate-300 shadow-2xl rounded hover:bg-slate-500 hover:underline hover:italic border-2 border-transparent hover:border-blue-500'>
      <Link to={`/character/${character.id}`}>
        <h1 className='mt-5 text-center capitalize font-semibold'>{name}</h1>
        <img className='mx-auto mb-5 ' src={character.sprites.front_default} alt={name} />
      </Link>
    </div>
  );
}
