import {useState} from "react";
import {FlyingAKite} from "../../components/Svg/FlyingAKite";
import {Button} from "@radix-ui/themes";

export const EnglishLevel = () => {
    const [showLevel, setShowLevel] = useState(0);

    const handleNextLevel = () => {
        if (showLevel < 5) setShowLevel(showLevel + 1);
    };

    const handlePrevLevel = () => {
        if (showLevel > 0) setShowLevel(showLevel - 1);
    };

    return (
        <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center items-center container">
            <h2 className="items-self-start mb-20 text-3xl font-bold text-center mx-4">
                Select your current english level
            </h2>
            <div className="flex flex-col">
                <div className="flex items-center h-full space-x-0 sm:space-x-4">
                    <svg
                        onClick={handlePrevLevel}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon icon-tabler icon-tabler-arrow-left cursor-pointer ${
                            showLevel > 0 ? "opacity-100" : "opacity-0"
                        } `}
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                    <div className="border border-2 border-gray-200 rounded-xl flex p-1 py-12 sm:p-4 cursor-pointer hover:bg-red-100 w-[240px] sm:w-[460px]">
                        <div
                            className={`${
                                showLevel === 0
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            } `}
                        >
                            <div className="flex flex-col sm:flex-row">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    A1 - Begginer
                                </p>
                                <p className="text-gray-500">
                                    Start from scratch
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${
                                showLevel === 1
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            }`}
                        >
                            <div className="">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    A2 - Pre-Intermediate
                                </p>
                                <p className="text-gray-500">First Steps</p>
                            </div>
                        </div>
                        <div
                            className={`${
                                showLevel === 2
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    B1 - Intermediate
                                </p>
                                <p className="text-gray-500">Making Progress</p>
                            </div>
                        </div>
                        <div
                            className={`${
                                showLevel === 3
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    B2 - Upper-Intermediate
                                </p>
                                <p className="text-gray-500">
                                    Overcoming challenges
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${
                                showLevel === 4
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    C1 - Advanced
                                </p>
                                <p className="text-gray-500">
                                    Mastering the language
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${
                                showLevel === 5
                                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center justify-center sm:flex-row sm:items-start"
                                    : "hidden opacity-0"
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row">
                                <FlyingAKite />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold text-3xl">
                                    C2 - Proficiency
                                </p>
                                <p className="text-gray-500">
                                    Speaking like a native
                                </p>
                            </div>
                        </div>
                    </div>
                    <svg
                        onClick={handleNextLevel}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`icon icon-tabler icon-tabler-arrow-right cursor-pointer ${
                            showLevel === 5 ? "opacity-0" : "opacity-100"
                        }`}
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                    </svg>
                </div>
                <Button className="mt-12 mx-14" size="4" color="red">
                    Continuar
                </Button>
            </div>
        </div>
    );
};
