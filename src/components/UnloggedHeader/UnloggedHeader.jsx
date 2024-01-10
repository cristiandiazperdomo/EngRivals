import {Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import {Brand} from "../Brand/Brand";

export const Header = () => {
    return (
        <div className="w-full py-4 text-2xl">
            <div className="flex flex-row items-center">
                <Brand />
                <div
                    className={"flex items-center space-x-4 lg:space-x-8 px-4"}
                >
                    <div
                        className={
                            "hidden items-center space-x-4 lg:flex text-sm font-medium"
                        }
                    >
                        <a>Home</a>
                        <a>Information</a>
                        <a>Pricing</a>
                        <a>About us</a>
                    </div>
                </div>

                <div
                    className={"flex flex-1 items-center justify-end space-x-4"}
                >
                    <div className={"flex items-center"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-moon-filled"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                                strokeWidth="0"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <div className={"hidden space-x-2 lg:flex"}>
                        <Link to="/signin">
                            <Button
                                style={{
                                    backgroundColor: "transparent",
                                    color: "black",
                                }}
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button
                                style={{
                                    backgroundColor: "black",
                                }}
                                radius="full"
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
