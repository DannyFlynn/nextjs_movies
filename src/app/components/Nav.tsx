import Image from 'next/image';
import greenPacMan from '../images/greenPacMan.png';
import pinkPacMan from '../images/pinkPacMan.png';
import { NavProps } from './Types';


const Nav = ({ category, chosenCategory, isTv, user, logOut }: NavProps) => {
    return (
        <div className="h-18 md:h-16 bg-sky-900 text-white text-2xl p-2 sticky top-0 z-30  w-full  border-b-2">
            <div className='flex w-full'>
                <div className="w-1/6 flex items-center">
                    <p className=' text-sky-400'>NextJS</p>
                </div>
                <div className="w-5/6 flex justify-evenly  md:justify-around lg:justify-between items-center">
                    <p className={`hidden sm:block md:text-3xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'popular' ? 'underline' : ''}`}
                        onClick={() => { chosenCategory('popular') }}
                    >Popular</p>
                    <p className={`hidden sm:block md:text-3xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'top_rated' ? 'underline' : ''}`}
                        onClick={() => { chosenCategory('top_rated') }}
                    >Top Rated</p>
                    <p className={`hidden sm:block md:text-3xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'airing_today' || category === 'upcoming' ? 'underline' : ''}`}
                        onClick={() => { chosenCategory(`${isTv ? 'airing_today' : 'upcoming'}`) }}
                    >{isTv ? 'Airing Today' : 'Upcoming'}</p>
                    <div className='flex items-center'>
                        <p className={`hidden sm:block md:text-3xl drop-shadow-lg  mx-3 cursor-pointer`}
                        >Upgrade?</p>

                    </div>
                    {user && (
                        <div className='w-full sm:w-auto flex justify-end sm:justify-normal items-center'>
                            <button className='sm:hidden mx-3 bg-sky-400 p-2 rounded-md border-2'>Upgrade</button>
                            <Image src={user === 'Danny' ? greenPacMan : pinkPacMan} width={40} height={40} alt="account"
                                className='cursor-pointer hidden sm:block' onClick={() => logOut()} />
                            <Image src={user === 'Danny' ? greenPacMan : pinkPacMan} width={40} height={40} alt="account"
                                className='cursor-pointer block sm:hidden' onClick={() => logOut()} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav