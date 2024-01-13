import {useState} from "react";
import {Button} from "@radix-ui/themes";
import {EnglishLevelCard} from "../../components/Cards/EnglishLevelCard";

const levels = [
    {level: "A1 - Begginer", description: "Start from scratch"},
    {level: "A2 - Pre-Intermediate", description: "First Steps"},
    {level: "B1 - Intermediate", description: "Making Progress"},
    {level: "B2 - Upper-Intermediate", description: "Overcoming challenges"},
    {level: "C1 - Advanced", description: "Mastering the language"},
    {level: "C2 - Proficiency", description: "Speaking like a native"},
];

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
            <div className="mb-20 text-3xl font-bold text-center mx-4">
                <h2>Select your current english level</h2>
                <p className="text-red-600">{levels[showLevel].level}</p>
            </div>
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
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                    <div className="border border-2 border-gray-200 rounded-xl flex p-1 py-12 sm:p-4 cursor-pointer w-[240px] sm:w-[460px]">
                        {levels.map((level, index) => (
                            <EnglishLevelCard
                                level={level.level}
                                description={level.description}
                                showLevel={showLevel}
                                index={index}
                            />
                        ))}
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
                </div>
                <Button className="mt-12 mx-14" size="4" color="red">
                    Continuar
                </Button>
            </div>
        </div>
    );
};
