import {Link} from "react-router-dom";
import {Button, Badge} from "@radix-ui/themes";

import audio from "../../assets/home-audio.png";
import options from "../../assets/home-options-1.png";
import writing from "../../assets/home-writing-1.png";

import avatar1 from "../../assets/avatar-2.jpg";
import avatar2 from "../../assets/avatar-3.jpg";
import {Carrousel} from "../Carrousel/Carrousel";

export const HeroSection = () => {
    return (
        <div className="flex min-h-[600px] max-h-[600px] mt-0 sm:mt-2">
            <div className="flex items-center w-full">
                <div className="flex flex-col items-start w-full animate-fade-in-right">
                    <Badge
                        className="font-normal"
                        color="red"
                        radius="full"
                        size="2"
                    >
                        Start today it will always be free
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrow-right"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </Badge>
                    <div className="text-left w-full">
                        <div className="mt-4 sm:mt-10 mb-10">
                            <h2 className="text-left text-4xl sm:text-5xl xl:text-6xl font-bold">
                                <span className="text-red-500 block">
                                    Learn English by
                                </span>{" "}
                                competing against others
                            </h2>
                            <div className="text-gray-600 space-y-1.5 my-4">
                                <p>
                                    Engage in real-time language challenges with
                                    our platform.
                                </p>
                                <p>
                                    Our personalized feedback system guides your
                                    learning journey.
                                </p>
                                <p>
                                    Less inconvenience, more progress in
                                    mastering English.
                                </p>
                            </div>
                        </div>
                        <div className="w-full space-y-2 md:space-y-0 space-x-0 md:space-x-2 flex flex-col md:flex-row items-center">
                            <Link
                                to="/grouplessons"
                                className="min-w-full md:min-w-48"
                            >
                                <Button
                                    className="min-w-full md:min-w-48"
                                    color="red"
                                    variant="solid"
                                    radius="full"
                                    size="3"
                                >
                                    <span className="text-sm text-center">
                                        Go to group lessons
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-arrow-right"
                                        width="16"
                                        height="16"
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
                                        <path d="M5 12l14 0" />
                                        <path d="M13 18l6 -6" />
                                        <path d="M13 6l6 6" />
                                    </svg>
                                </Button>
                            </Link>
                            <Button
                                className="min-w-full md:min-w-48"
                                color="red"
                                variant="soft"
                                radius="full"
                                size="3"
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden 2xl:flex relative w-full items-center justify-end animate-fade-in-left">
                <img
                    src={audio}
                    alt="audio"
                    className="absolute w-[330px] h-[290px] left-0 top-0"
                />
                <img
                    src={writing}
                    alt="writing"
                    className="absolute w-[332px] h-[225px] bottom-0 left-20"
                />
                <img
                    src={options}
                    alt="options"
                    className="absolute w-[330px] h-[200px] top-32"
                />
                <div className="absolute flex space-x-4 bottom-40 right-20 items-center text-gray-800">
                    <img
                        src={avatar1}
                        alt="avatar1"
                        className="w-[60px] h-[60px] rounded-full"
                    />
                    <span className="font-bold">VS</span>
                    <img
                        src={avatar2}
                        alt="avatar2"
                        className="w-[60px] h-[60px] rounded-full"
                    />
                </div>
            </div>
            <Carrousel />
        </div>
    );
};
