import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { useEffect, useState } from 'react';
import { apiService } from '../components/api/apiService';

export default function Character() {
  const { characterid } = useParams();
  const [character, updateCharacter] = useState(false as any);
  const [flag, setFlag] = useState(false as boolean);

  useEffect(() => {
    (async () => {
      const data = await apiService(0, characterid);
      if (data === undefined) {
        setFlag(true);
      }
      updateCharacter(data);
    })();
  }, []);

  if (flag) {
    return (
      <div className='w-full'>
        <Header />
        <h1 className='text-center font-black'>Character not found</h1>
      </div>
    );
  }

  if (!character) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='w-full bg-slate-100 h-screen'>
      <Header />
      <div className='px-8 w-full'>
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
        <hr className='my-5' />
        <section className='w-96 mx-auto shadow-2xl px-4 rounded-lg pb-10 bg-gray-100 pt-3 mt-1'>
          <h1 className='mt-8 pb-5 text-center font-black'>Abilities</h1>
          <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto pt-6 pb-2 pl-10'>
            {character.abilities.map((ability: any) => {
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
              {character.types.map((type: any) => {
                let color = '';
                switch (type.type.name) {
                  case 'normal':
                    color = 'bg-[#A8A878]';
                    break;
                  case 'fighting':
                    color = 'bg-[#C03028]';
                    break;
                  case 'flying':
                    color = 'bg-[#A890F0]';
                    break;
                  case 'poison':
                    color = 'bg-[#A040A0]';
                    break;
                  case 'ground':
                    color = 'bg-[#E0C068]';
                    break;
                  case 'rock':
                    color = 'bg-[#B8A038]';
                    break;
                  case 'bug':
                    color = 'bg-[#A8B820]';
                    break;
                  case 'ghost':
                    color = 'bg-[#705898]';
                    break;
                  case 'steel':
                    color = 'bg-[#B8B8D0]';
                    break;
                  case 'fire':
                    color = 'bg-[#F08030]';
                    break;
                  case 'water':
                    color = 'bg-[#6890F0]';
                    break;
                  case 'grass':
                    color = 'bg-[#78C850]';
                    break;
                  case 'electric':
                    color = 'bg-[#F8D030]';
                    break;
                  case 'psychic':
                    color = 'bg-[#F85888]';
                    break;
                  case 'ice':
                    color = 'bg-[#98D8D8]';
                    break;
                  case 'dragon':
                    color = 'bg-[#7038F8]';
                    break;
                  case 'dark':
                    color = 'bg-[#705848]';
                    break;
                  case 'fairy':
                    color = 'bg-[#EE99AC]';
                    break;
                  case 'unknown':
                    color = 'bg-[#68A090]';
                    break;
                  case 'shadow':
                    color = 'bg-[#493963]';
                    break;
                  default:
                    color = 'bg-transparent';
                    break;
                }
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
  );
}
