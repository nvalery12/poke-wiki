import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Loader from '../components/loader';
import { useCharacterCard } from '../assets/hooks/useCharacterCard';
import type { Ability, Type } from '../assets/hooks/useCharacterCard';
import setColor from '../components/api/color';

export default function Character() {
  const { characterid } = useParams();
  const { character, isLoading } = useCharacterCard(characterid);

  if (isLoading) {
    return <Loader />;
  }
  if (!character) {
    return (
      <div className='w-full'>
        <Header />
        <h1 className='text-center font-black'>Character not found</h1>
      </div>
    );
  }
  return (
    <div className='w-full bg-gray-900 h-screen'>
      <Header />
      <div className='px-8 w-full'>
        <div className='bg-yellow-400 w-[400px] mx-auto py-3 rounded-3xl shadow-2xl'>
          <section className='shadow-2xl bg-white w-96 mx-auto rounded-2xl pb-2'>
            <div className='mx-auto w-48 relative'>
              <img src={character.sprites.front_default} alt='Front' className='-ml-1' />
              <img
                src={character.sprites.back_default}
                alt='Back'
                className='absolute top-0 left-28'
              />
            </div>
            <h1 className='capitalize text-center font-black'>{character.species.name}</h1>
          </section>
          <hr className='my-5 w-96 mx-auto' />
          <section className='w-96 mx-auto shadow-2xl px-4 rounded-lg pb-10 bg-gray-100 pt-3 mt-1'>
            <h1 className='mt-8 pb-5 text-center font-black'>Abilities</h1>
            <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto pt-6 pb-2 pl-10'>
              {character.abilities.map((ability: Ability) => {
                return (
                  <p key={ability.ability.name} className='capitalize'>
                    {ability.ability.name}
                  </p>
                );
              })}
            </div>
            <hr />
            <div className='relative'>
              <h1 className='font-bold'>Height</h1>
              <p className='absolute top-0 right-0'>{character.height}</p>
            </div>
            <hr />
            <div className='relative'>
              <h1 className='font-bold'>Weight</h1>
              <p className='absolute top-0 right-0'>{character.weight}</p>
            </div>
            <hr />
            <div className='relative'>
              <h1 className='font-bold'>Base Experience</h1>
              <p className='absolute top-0 right-0'>{character.base_experience}</p>
            </div>
            <hr />
            <div className='relative'>
              <h1 className='font-bold'>Types</h1>
              <div className='grid grid-cols-5'>
                {character.types.map((type: Type) => {
                  const color = setColor(type.type.name);

                  return (
                    <div
                      key={type.type.name}
                      className={`rounded-xl w-14 h-7 ${color} my-2 border-black border-2`}
                    >
                      <p key={type.type.name} className='capitalize text-center font-semibold'>
                        {type.type.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
