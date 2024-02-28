import {useEffect, useState} from "react";

const icons = ["⛔", "🚧", "😂", "💀"];

export const Emojis = ({handleSendEmoji}) => {
    const [showEmojis, setShowEmojis] = useState(false);
    const [waitTime, setWaitTime] = useState(undefined);
    const [canUseEmojis, setCanUseEmojis] = useState(true);

    const saveWaitTime = (index) => {
        if (!canUseEmojis) return;
        handleSendEmoji(index);
        setWaitTime(10);
        setCanUseEmojis(false);
    };

    useEffect(() => {
        if (isNaN(waitTime)) return;

        const idTimeout = setTimeout(() => {
            if (waitTime <= 0) {
                setWaitTime(undefined);
                setCanUseEmojis(true);
                clearInterval(idTimeout);
                return;
            }
            setWaitTime(waitTime - 1);
        }, 1000);

        return () => {
            clearTimeout(idTimeout);
        };
    }, [waitTime]);

    return (
        <div className="absolute right-0 top-0 p-1 flex">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-150 icon icon-tabler icon-tabler-messages w-8 h-8 cursor-pointer text-gray-300 hover:text-gray-700"
                    onClick={() => setShowEmojis(!showEmojis)}
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
                <span className="absolute flex justify-center text-gray-400 top-0 right-0 bg-white min-w-4 -mb-0.5 rounded-xl font-bold ">
                    {waitTime}
                </span>
            </div>
            {showEmojis && canUseEmojis && (
                <div className="absolute flex right-10 top-0 p-1 bg-white rounded-xl space-x-2">
                    {icons.map((icon, index) => (
                        <button
                            className="py-1 px-2 border border-2 border-gray-200 rounded-full"
                            onClick={() => saveWaitTime(index)}
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
