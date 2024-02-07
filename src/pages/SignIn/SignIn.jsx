import {TextField, Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";

import pic from "../../assets/work-from-home.png";

export const SignIn = () => {
    return (
        <div className="flex justify-center lg:justify-start min-w-full">
            <div className="flex h-screen rounded-xl justify-center lg:justify-between w-full">
                <div className="flex justify-center items-center min-h-screen w-[50%]">
                    <div>
                        <p className="text-2xl font-bold my-8">
                            Sign in to EngRivals
                        </p>
                        <div className="text-1xl my-10color space-y-6 w-[300px] sm:w-[400px]">
                            <div className="space-y-1">
                                <label htmlFor="email" className="font-bold">
                                    Email
                                </label>
                                <TextField.Input
                                    className="py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500"
                                    color="green"
                                    id="email"
                                    variant="surface"
                                    radius="large"
                                />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className="font-bold">
                                    Password
                                </label>
                                <TextField.Input
                                    className="py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500 w-full"
                                    type="password"
                                    color="green"
                                    id="password"
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
