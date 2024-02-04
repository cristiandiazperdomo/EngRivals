import {Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import {Brand} from "../Brand/Brand";
import {UnloggedNavHeaderModal} from "../UnloggedNavHeaderModal/UnloggedNavHeaderModal";
import {useState} from "react";

export const Header = () => {
    const [showMobileNavHeader, setShowMobileNavHeader] = useState(false);

    return (
        <>
            {showMobileNavHeader && (
                <UnloggedNavHeaderModal
                    hideModal={() => setShowMobileNavHeader(false)}
                />
            )}
            <div className="w-full py-4 text-2xl">
                <div className="flex flex-row items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setShowMobileNavHeader(true)}
                        className="icon icon-tabler icon-tabler-menu-2 text-gray-700 w-7 cursor-pointer transition-all duration-150 flex sm:hidden"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                    <Brand />
                    <div className="hidden sm:flex items-center space-x-4 lg:space-x-8 px-4">
                        <div className="hidden items-center space-x-4 lg:flex text-sm font-medium">
                            <a>Home</a>
                            <a>Information</a>
                            <a>Pricing</a>
                            <a>About us</a>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-1 sm:space-x-4">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-moon-filled cursor-pointer text-black hover:text-gray-700"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
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
                                <path
                                    d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="flex space-x-0.5 sm:space-x-2">
                            <Link to="/signin" className="hidden md:flex">
                                <Button
                                    className="p-5 transition-all duration-150 text-black hover:text-gray-700"
                                    style={{
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    className="transition-all duration-150 p-5 bg-black hover:bg-gray-600"
                                    radius="full"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
