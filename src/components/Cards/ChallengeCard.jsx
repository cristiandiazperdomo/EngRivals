import {useEffect, useState} from "react";
import "./ChallengeCard.css";

export const ChallengeCard = ({
    category,
    image,
    handleCreateLobby,
    isLookingForAGame,
    categorySelected,
    handleCancelCreateLobby,
    hasTheLessonBeenCanceled,
    setHasTheLessonBeenCanceled,
}) => {
    const [lessonsCanceledTimer, setLessonCanceledTimer] = useState(0);

    useEffect(() => {
        if (hasTheLessonBeenCanceled) {
            setLessonCanceledTimer(10);
            setHasTheLessonBeenCanceled(false);
            return;
        }

        if (lessonsCanceledTimer <= 0) return;

        const idTimeout = setTimeout(() => {
            if (lessonsCanceledTimer <= 0) clearTimeout(idTimeout);
            setLessonCanceledTimer(lessonsCanceledTimer - 1);
        }, 1000);

        return () => {
            clearInterval(idTimeout);
        };
    }, [lessonsCanceledTimer, hasTheLessonBeenCanceled]);

    return (
        <div
            className={`transition-all duration-150 flex justify-end items-center border-2 border-gray-200 relative w-[calc(100%)] sm:w-[calc(100%-16px)] md:w-[calc(50%-16px)] xl:w-[calc(25%-16px)] xl:w-[calc(25%-16px)] h-[210px] rounded-xl group hover:shadow-lg hover:shadow-red-200 ${
                isLookingForAGame &&
                categorySelected?.toLowerCase() === category?.toLowerCase()
                    ? "animation-pulse hover:shadow-transparent"
                    : "hover:shadow-transparent"
            } cursor-pointer`}
            onClick={lessonsCanceledTimer > 0 ? null : handleCreateLobby}
        >
            <img
                src={image}
                alt={category}
                className={`transition-all duration-1000 h-[160px] mr-4 ${
                    isLookingForAGame &&
                    categorySelected?.toLowerCase() !== category?.toLowerCase()
                        ? "grayscale"
                        : ""
                }`}
            />
            <div className="top-0 absolute w-full h-full flex">
                <div className="relative w-full h-full">
                    <div className="absolute">
                        <p className="text-gray-800 group-hover:text-gray-900 font-bold text-2xl mt-4 ml-4 z-10">
                            {category}
                        </p>
                    </div>
                    {isLookingForAGame &&
                        categorySelected?.toLowerCase() ===
                            category?.toLowerCase() && (
                            <div
                                className={`${
                                    !isLookingForAGame ? "hidden" : ""
                                } transition-all duration-500 text-black opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-transparent to-red-50 z-10 rounded-xl `}
                                onClick={handleCancelCreateLobby}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-x cursor-pointer"
                                    width="24"
                                    height="24"
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
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                                <p className="font-bold">Cancel</p>
                            </div>
                        )}
                    <div
                        className={`${
                            isLookingForAGame ? "hidden" : "none"
                        } transition-all duration-500 text-black opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-transparent to-red-50 z-10 rounded-xl `}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-users"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        <p className="font-bold">
                            {lessonsCanceledTimer > 0
                                ? "Wait " + lessonsCanceledTimer + " seconds"
                                : "Find Opponent"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
