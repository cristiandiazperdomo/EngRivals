import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {TextField, Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createAccount} from "../../redux/actions/userActions";

import pic from "../../assets/work-from-anywhere.png";

export const SignUp = () => {
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleCreateUser = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (name.length < 3 && email.length < 3 && password.length < 3) {
            console.log("Nombre, email o contraseña muy cortos");
            return;
        }

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
                <div className="flex justify-center items-center min-h-screen w-[50%]">
                    <div>
                        <p className="text-2xl font-bold my-8">
                            Sign up to EngRivals
                        </p>
                        <form
                            className="text-1xl my-10 space-y-9 w-[300px] sm:w-[400px]"
                            onSubmit={handleCreateUser}
                        >
                            <div>
                                <div className="space-y-1">
                                    <label htmlFor="name" className="font-bold">
                                        Name
                                    </label>
                                    <TextField.Input
                                        ref={nameRef}
                                        color="green"
                                        className="py-6 px-3 focus:shadow-xl focus:shadow-green-100"
                                        id="name"
                                        variant="surface"
                                        radius="large"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1 mb-12">
                                <label htmlFor="email" className="font-bold">
                                    Email
                                </label>
                                <TextField.Input
                                    ref={emailRef}
                                    color="green"
                                    className="py-6 px-3 focus:shadow-xl focus:shadow-green-100"
                                    id="email"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <div className="space-y-1 mb-12">
                                <label htmlFor="password" className="font-bold">
                                    Password
                                </label>
                                <TextField.Input
                                    ref={passwordRef}
                                    type="password"
                                    color="green"
                                    id="password"
                                    className="py-6 px-3 w-full focus:shadow-xl focus:shadow-green-100"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <Button
                                className="w-full p-6"
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
                    <img
                        src={pic}
                        alt="study-from-home"
                        className="bg-red-50 object-cover h-screen absolute"
                    />
                    <div className="absolute w-full mb-12 flex justify-center bottom-0">
                        <p className="text-3xl font-black w-100 mx-auto">
                            English is everywhere
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
