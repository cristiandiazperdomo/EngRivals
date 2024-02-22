import {useEffect, useState} from "react";

export const CompletedTestTimer = ({creationTime, finishTime}) => {
    const [minutes, setMinutes] = useState(0);
    const [secondsInFormat, setSecondsInFormat] = useState(0);

    const calculateFinalizationTime = () => {
        const totalSeconds = Math.floor(
            (new Date(finishTime).getTime() -
                new Date(creationTime).getTime()) /
                1000
        );

        setMinutes(Math.floor(totalSeconds / 60));
        setSecondsInFormat(totalSeconds % 60);
    };

    const calculateCurrentTime = () => {
        const totalSeconds = Math.floor(
            (new Date().getTime() - new Date(creationTime).getTime()) / 1000
        );

        setMinutes(Math.floor(totalSeconds / 60));
        setSecondsInFormat(totalSeconds % 60);
    };

    useEffect(() => {
        if (finishTime !== null) calculateFinalizationTime();
        if (finishTime === null) {
            const idInterval = setInterval(() => {
                calculateCurrentTime();
            }, 1000);

            return () => {
                clearInterval(idInterval);
            };
        }
    }, [finishTime]);

    return (
        <div className="flex text-xs text-slate-900 bg-red-50 rounded-l-xl -mt-2 p-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clock-hour-12 w-4"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 7v5" />
            </svg>
            {minutes}m{secondsInFormat}s
        </div>
    );
};
