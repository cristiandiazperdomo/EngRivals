import {TextField, Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";

export const SignUp = () => {
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
                            src="https://i.imgur.com/oLYRijg.mp4"
                            type="video/mp4"
                        ></source>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                <div className="flex items-center min-h-screen ml-0 lg:ml-20 xl:ml-40">
                    <div>
                        <p className="text-2xl font-bold my-8">
                            Sign up to EngRivals
                        </p>
                        <form className="text-1xl my-10 space-y-9 w-[300px] sm:w-[400px]">
                            <div className="grid grid-cols-2 space-x-4 mb-12">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="font-bold">
                                        Name
                                    </label>
                                    <TextField.Input
                                        color="green"
                                        className="py-6 px-3 focus:shadow-xl focus:shadow-green-100"
                                        id="name"
                                        variant="surface"
                                        radius="large"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="username"
                                        className="font-bold"
                                    >
                                        Username
                                    </label>
                                    <TextField.Input
                                        type="text"
                                        color="green"
                                        id="username"
                                        className="py-6 px-3 w-full focus:shadow-xl focus:shadow-green-100"
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
            </div>
        </div>
    );
};
