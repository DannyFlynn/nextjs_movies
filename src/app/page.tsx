import Accounts from "./components/Accounts";

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-sky-400 text-white text-2xl'>
      <div className='flex flex-col items-center text-7xl mb-12'>
        <p className='text-sky-900 mr-6'>NextJS</p>
        <p>Movies</p>
      </div>
      <Accounts />
    </div>
  )
}
