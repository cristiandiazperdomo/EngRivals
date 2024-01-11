import {useEffect} from "react";

import {Loader} from "../Loader/Loader";

const advices = [
    "Do people actually read this?",
    "Analyzing your previous progress, adjusting the difficulty.",
    "Setting up the battlefield",
    "Welcome back! Getting ready for your English session.",
    "Preparing the ground",
    "Loading new challenges, are you ready for the challenge?",
];

export const LoaderScreen = ({setShowLoaderScreen}) => {
    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setShowLoaderScreen(false);
        }, 6000);

        return () => clearTimeout(idTimeout);
    }, []);
    return (
        <div
            className="fixed flex flex-col justify-center items-center min-h-screen min-w-full bg-white bg-opacity-40"
            style={{zIndex: 100}}
        >
            <div className="flex flex-col pb-12 pt-16 px-8 bg-gray-900 text-center text-white rounded-xl sm:w-[300px] xl:w-[320px]">
                <Loader />
                <span className="font-bold mt-8 text-gray-400 animate-pulse">
                    LOADING...
                </span>
                <span className="font-bold mt-2">
                    {
                        advices[
                            Math.floor(
                                Math.random() * (advices.length - 1 - 0 + 1) + 0
                            )
                        ]
                    }
                </span>
            </div>
        </div>
    );
};
