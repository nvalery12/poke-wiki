import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [id, setId] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    if (id !== '') {
      window.location.href = `/character/${id.toLowerCase()}`;
    }
  }

  return (
    <div className='w-full bg-yellow-400 h-24 md:h-14 mb-11 md:relative'>
      <Link to={'/'}>
        <h1 className='font-bold text-2xl text-center pt-3 hover:underline'>Pokemon Wiki</h1>
      </Link>
      <div className=' md:absolute md:top-1 md:left-[20px] w-[220px] mx-auto mt-3'>
        <div className='relative'>
          <input
            id='id'
            type='text'
            placeholder='Type id or name'
            className='rounded-2xl pl-3 border-black border-2'
            value={id}
            onInput={(e: any) => {
              setId(e.target.value);
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          <button
            className='bg-white rounded-full absolute right-[8px] top-[1.5px]'
            onClick={handleSubmit}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
