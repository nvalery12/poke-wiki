import Header from "./header";

export default function Loader() {
  return (
    <div>
        <Header/>
    <div className='w-[300px] h-[300px] mx-auto align-middle'>
      <div className='loader-circle-4 spinner_top'>
        <div className='loader-circle-4 spinner_mid'>
          <div className='loader-circle-4 spinner_bot'></div>
        </div>
      </div>
    </div></div>
  );
}
