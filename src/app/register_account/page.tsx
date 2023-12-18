import SignUp from "../components/SignUp";

const RegisterAccount = () => {
    return (
        <div className='w-full min-h-screen bg-sky-400 text-white'>
            <div className='flex flex-col items-center text-7xl mb-20'>
                <p className='text-sky-900 mr-6'>NextJS</p>
                <p>Movies</p>
            </div>
            <SignUp />
        </div>
    )
}

export default RegisterAccount