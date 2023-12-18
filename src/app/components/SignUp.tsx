"use client"
import { useState } from 'react';

const SignUp = () => {

    const [signInForm, setSignInForm] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [comparePassword, setComparePassword] = useState("");
    const [errors, setErrors] = useState<{ username?: string, password?: string }>({});



    const signIn = (signin: string) => {
        validate(signin)
    }

    const validate = (formType: string) => {
        console.log(formType)
        if (!username) {
            console.log('email is required')
            errors.username = 'email is required.';
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            console.log('email is Invalid')
            errors.username = 'email is invalid.';
        } else {
            console.log('success')
        }

        if (formType === 'sign-in') {

        }

    }

    return (
        <div className='w-full flex flex-col  items-center text-2xl'>
            <div className='w-full  text-center'>
                <input type='text' placeholder='Email'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-4/5 sm:w-2/4 lg:w-1/3 2xl:w-2/5 bg-transparent border-b-2 placeholder-white pl-2 py-1'
                    required />
            </div>
            <div className='w-full mt-8 text-center'>
                <input type='password' placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-4/5 sm:w-2/4 lg:w-1/3 2xl:w-2/5 bg-transparent border-b-2 placeholder-white pl-2 py-1'
                    required />
            </div>
            <div className='w-full mt-8 text-center'>
                <input type='password' placeholder='retype-password'
                    value={comparePassword}
                    onChange={(e) => setComparePassword(e.target.value)}
                    className='w-4/5 sm:w-2/4 lg:w-1/3 2xl:w-2/5 bg-transparent border-b-2 placeholder-white pl-2 py-1'
                    required />
            </div>
            <div className='w-full mt-6 text-center'>
                <div>
                    <p className='text-base p-2 text-sky-900'>Please select a gender for your avatar!...&#40;optional&#41;</p>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col mx-3'>
                        <input type="radio" value="male" />
                        <label>Male</label>
                    </div>
                    <div className='flex flex-col mx-3'>
                        <input type="radio" value="female" />
                        <label>Female</label>
                    </div>
                </div>
            </div>
            <div className="w-full my-8 text-center">
                <button onClick={() => signIn('sign-in')}
                    className="w-32 border-2 bg-sky-900 p-2 lg:hover:bg-sky-700">Sign-Up</button>
            </div>
        </div>
    )
}

export default SignUp