import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TextField, Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createAccount} from "../../redux/actions/userActions";

import pic from "../../assets/work-from-anywhere.png";

export const SignUp = () => {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleCreateUser = (e) => {
        e.preventDefault();

        setNameError(false);
        setEmailError(false);
        setPasswordError(false);

        const emailPattern =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const passwordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,52}$/;

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let errorFound = false;

        if (name.length <= 1) {
            setNameError(true);
            errorFound = true;
        }
        if (!emailPattern.test(email)) {
            setEmailError(true);
            errorFound = true;
        }
        if (!passwordPattern.test(password)) {
            setPasswordError(true);
            errorFound = true;
        }

        if (errorFound) return;
        const requestBody = {
            name,
            email,
            password,
        };

        dispatch(createAccount(requestBody, navigate));
    };

    return (
        <div className="flex justify-center lg:justify-start min-w-full">
            <div className="flex h-screen rounded-xl justify-center lg:justify-between w-full">
                <div className="flex justify-center items-center min-h-screen w-[50%] animate-fade-in-right">
                    <div>
                        <p className="text-2xl font-bold my-8">
                            Sign up to EngRivals
                        </p>
                        <form
                            className="text-1xl my-10 w-[300px] sm:w-[400px]"
                            onSubmit={handleCreateUser}
                        >
                            <div className="mb-2">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="font-bold">
                                        Name
                                    </label>
                                    <TextField.Input
                                        ref={nameRef}
                                        className={`${
                                            nameError ? "border-red-500" : ""
                                        } py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500`}
                                        id="name"
                                        variant="surface"
                                        radius="large"
                                    />
                                </div>
                            </div>
                            <span
                                className={`text-red-600 ${
                                    nameError ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                Use at least 2 characters
                            </span>
                            <div className="space-y-1 mb-2">
                                <label htmlFor="email" className="font-bold">
                                    Email
                                </label>
                                <TextField.Input
                                    ref={emailRef}
                                    className={`${
                                        emailError ? "border-red-500" : ""
                                    } py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500`}
                                    id="email"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <span
                                className={`text-red-600 ${
                                    emailError ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                Contains not valid information
                            </span>
                            <div className="space-y-1 mb-2">
                                <label htmlFor="password" className="font-bold">
                                    Password
                                </label>
                                <TextField.Input
                                    ref={passwordRef}
                                    type="password"
                                    id="password"
                                    className={`${
                                        passwordError ? "border-red-500" : ""
                                    } py-6 px-3 w-full focus:shadow-xl focus:shadow-green-100 border focus:border-green-500`}
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <div
                                className={`text-red-600 py-2 ${
                                    passwordError ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                Must have
                                <span className="ml-1 font-bold">
                                    8 characters
                                </span>{" "}
                                and
                                <span className="ml-1 font-bold">
                                    at least one uppercase
                                </span>{" "}
                                and
                                <span className="ml-1 font-bold">
                                    one lowercase letter
                                </span>
                            </div>
                            <Button
                                className="w-full p-6 mb-8"
                                color="gray"
                                variant="solid"
                                radius="full"
                                highContrast
                            >
                                Create Account
                            </Button>
                            <p className="font-light text-center">
                                Already have an account?{" "}
                                <Link
                                    to="/signin"
                                    className="underline font-normal"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
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
