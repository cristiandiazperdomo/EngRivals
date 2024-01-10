import {TextField, Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";

export const SignIn = () => {
    return (
        <div className="flex justify-center lg:justify-start min-w-full">
            <div className="flex h-[560px] rounded-xl">
                <div className="hidden lg:block">
                    <video
                        className="max-h-screen"
                        autoPlay={true}
                        loop={true}
                        muted
                    >
                        <source
                            src="https://i.imgur.com/rsIlfxv.mp4"
                            type="video/mp4"
                        ></source>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                <div className="flex items-center min-h-screen ml-0 lg:ml-20 xl:ml-40">
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
            </div>
        </div>
    );
};
