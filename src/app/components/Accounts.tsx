"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import greenPacMan from '../images/greenPacMan.png';
import pinkPacMan from '../images/pinkPacMan.png';

export async function getServerSideProps() {
    const key = await process.env.ENV_VAR
    console.log('the key is ', key)
    return {
        props: {
            env: 'hello'
        },
    }
}

const Accounts = () => {
    const router = useRouter();

    const login = (name: string) => {
        localStorage.setItem('user', name);
        router.push('/movies');
    };


    return (
        <div>
            <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center relative">
                <div
                    className="w-32 h-40 bg-sky-900 mx-6 mb-4 lg:md-0 p-3 rounded-lg shadow-lg text-center cursor-pointer lg:hover:bg-sky-700"
                    onClick={() => login('Danny')}
                >
                    <Image src={greenPacMan} alt="account" width={100} height={100} />
                    <p className="text-2xl">Danny</p>
                </div>
                <div
                    className="w-32 h-40 bg-sky-900 mx-6 mb-4 lg:md-0 p-3 rounded-lg shadow-lg text-center cursor-pointer lg:hover:bg-sky-700"
                    onClick={() => login('Nicki')}
                >
                    <Image src={pinkPacMan} alt="account" width={100} height={100} />
                    <p className="text-2xl">Nicki</p>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
