import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card(data: any) {
  const name = data.data.name;
  const url = data.data.url;
  const [info, setInfo] = useState(false as any);
  useEffect(() => {
    (async () => {
      const information = await fetch(url, { method: 'GET' }).then((res) => res.json());
      setInfo(information);
    })();
  }, []);

  if (!info) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='w-64 bg-slate-300 shadow-2xl rounded hover:bg-slate-500'>
      <Link to={`/character/${info.id}`}>
        <h1 className='mt-5 text-center capitalize font-semibold'>{name}</h1>
        <img className='mx-auto mb-5' src={info.sprites.front_default} alt={name} />
      </Link>
    </div>
  );
}
