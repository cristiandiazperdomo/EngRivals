import {TextField, Button} from "@radix-ui/themes";
import {Link, useNavigate} from "react-router-dom";

import pic from "../../assets/work-from-home.webp";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/userActions";

export const SignIn = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const emailPattern =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const passwordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,52}$/;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!emailPattern.test(email) || !passwordPattern.test(password)) {
            setError(true);
        } else {
            const requestBody = {
                email,
                password,
            };

            dispatch(login(requestBody, navigate, setError));
        }
    };

    useEffect(() => {
        if (error) {
            const idTimeout = setTimeout(() => {
                setError(false);
            }, 5000);

            return () => {
                clearTimeout(idTimeout);
            };
        }
    }, [error]);

    return (
        <div className="flex justify-center lg:justify-start min-w-full">
            <div className="flex h-screen rounded-xl justify-center lg:justify-between w-full">
                <div className="flex justify-center items-center min-h-screen w-full lg:w-[50%] animate-fade-in-right">
                    <form onSubmit={handleLogin}>
                        <p className="text-2xl font-bold my-8">
                            Sign in to EngRivals
                        </p>
                        <div className="text-1xl my-10  w-[300px] sm:w-[400px]">
                            <div className="space-y-1 mb-6">
                                <label htmlFor="email" className="font-bold">
                                    Email
                                </label>
                                <TextField.Input
                                    ref={emailRef}
                                    className={`transition-all duration-300 ${
                                        error ? "border-red-500" : ""
                                    } py-6 px-3 focus:shadow-xl focus:shadow-yellow-100 border focus:border-yellow-500`}
                                    color="yellow"
                                    id="email"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <div className="space-y-1 mb-6">
                                <label htmlFor="password" className="font-bold">
                                    Password
                                </label>
                                <div className="relative">
                                    <div>
                                        <TextField.Input
                                            ref={passwordRef}
                                            className={`transition-all duration-300 ${
                                                error ? "border-red-500" : ""
                                            } py-6 px-3 focus:shadow-xl focus:shadow-yellow-100 border focus:border-yellow-500 w-full`}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            color="yellow"
                                            id="password"
                                            variant="surface"
                                            radius="large"
                                        />
                                    </div>
                                    <span
                                        className="transition-all duration-200 absolute top-0 right-1 mt-1 p-2 cursor-pointer text-gray-400 hover:text-gray-800"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-eye-off"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                                <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                                <path d="M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-eye"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`transition-all duration-300 ${
                                    error ? "opacity-100" : "opacity-0"
                                } w-full text-center`}
                            >
                                <span className="text-red-600">
                                    Email or password are incorrect
                                </span>
                            </div>
                            <Button
                                className="w-full p-6 mb-6"
                                color="gray"
                                variant="solid"
                                radius="full"
                                highContrast
                            >
                                Sign in
                            </Button>
                            <p className="font-light text-center">
                                Don't have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="underline font-normal"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:block relative w-[50%] h-screen">
                    <div className="absolute top-0 mt-11 mr-12 right-0 z-10">
                        <img
                            src="https://i.imgur.com/YiAq0Ei.png"
                            width="38"
                            className="object-cover"
                        ></img>
                    </div>
                    <img
                        src={pic}
                        alt="study-from-home"
                        className="bg-gray-50 object-cover h-screen absolute"
                    />
                </div>
            </div>
        </div>
    );
};
