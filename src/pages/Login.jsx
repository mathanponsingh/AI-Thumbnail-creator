import React, { useState } from 'react'
import { Eye, User } from 'lucide-react'

const Login = () => {

    const [currState, setCurrState] = useState('Login')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="
            min-h-screen
            w-full
            flex
            justify-center
            items-center
            bg-gray-50
            p-4
        ">

            {/* LOGIN CARD */}
            <div className="
                w-full
                max-w-md
                flex
                flex-col
                gap-4
                bg-white
                border
                p-6
                sm:p-8
                md:p-10
                rounded-lg
                shadow-xl
            ">

                {/* TITLE */}
                <p className="text-2xl font-bold text-center">
                    {currState}
                </p>


                {/* USERNAME - ONLY SIGN UP */}
                {
                    currState === 'Sign Up' &&
                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Username"
                            className="
                                w-full
                                text-black
                                placeholder:text-gray-500
                                p-3
                                pr-10
                                border
                                rounded-lg
                                outline-none
                                focus:border-blue-500
                            "
                        />

                        <User
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-gray-500
                            "
                        />

                    </div>
                }


                {/* EMAIL */}
                <div className="relative">

                    <input
                        type="email"
                        placeholder="Email"
                        className="
                            w-full
                            text-black
                            placeholder:text-gray-500
                            p-3
                            pr-10
                            border
                            rounded-lg
                            outline-none
                            focus:border-blue-500
                        "
                    />

                    <User
                        className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-500
                        "
                    />

                </div>


                {/* PASSWORD */}
                <div className="relative">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="
                            w-full
                            text-black
                            placeholder:text-gray-500
                            p-3
                            pr-10
                            border
                            rounded-lg
                            outline-none
                            focus:border-blue-500
                        "
                    />

                    <Eye
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-500
                            cursor-pointer
                        "
                    />

                </div>


                {/* BUTTON */}
                <button className="
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    px-4
                    py-3
                    rounded-lg
                    font-semibold
                    transition
                ">
                    {currState}
                </button>


                {/* SWITCH LOGIN / SIGN UP */}
                <div className="text-center text-sm">

                    {
                        currState === 'Login'
                            ?
                            <p>
                                Don't have an account?{" "}
                                <span
                                    className="
                                        text-blue-500
                                        cursor-pointer
                                        font-semibold
                                        hover:underline
                                    "
                                    onClick={() => setCurrState('Sign Up')}
                                >
                                    Sign Up
                                </span>
                            </p>
                            :
                            <p>
                                Already have an account?{" "}
                                <span
                                    className="
                                        text-blue-500
                                        cursor-pointer
                                        font-semibold
                                        hover:underline
                                    "
                                    onClick={() => setCurrState('Login')}
                                >
                                    Login
                                </span>
                            </p>
                    }

                </div>

            </div>

        </div>
    )
}

export default Login
