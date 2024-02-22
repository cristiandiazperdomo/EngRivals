import {TextField, Button} from "@radix-ui/themes";
import {Link, useNavigate} from "react-router-dom";

import pic from "../../assets/work-from-home.png";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/userActions";

export const SignIn = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
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
                                    } py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500`}
                                    color="green"
                                    id="email"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <div className="space-y-1 mb-6">
                                <label htmlFor="password" className="font-bold">
                                    Password
                                </label>
                                <TextField.Input
                                    ref={passwordRef}
                                    className={`transition-all duration-300 ${
                                        error ? "border-red-500" : ""
                                    } py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500 w-full`}
                                    type="password"
                                    color="green"
                                    id="password"
                                    variant="surface"
                                    radius="large"
                                />
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
