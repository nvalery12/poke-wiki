import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='w-full bg-slate-700 h-14'>
      <Link to={'/'}>
        <h1 className='text-white text-2xl text-center pt-3 hover:underline'>Pokemon Wiki</h1>
      </Link>
    </div>
  );
}
