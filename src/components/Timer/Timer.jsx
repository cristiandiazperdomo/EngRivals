import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

export const Timer = () => {
    const [seconds, setSeconds] = useState(undefined);
    const [minutes, setMinutes] = useState(0);
    const [secondsInFormat, setSecondsInFormat] = useState(0);

    const {challenge} = useSelector((state) => state.challengeReducer);

    const navigate = useNavigate();

    const {id} = useParams();

    const handleGetSeconds = () => {
        const challengeCreationTime = new Date(challenge?.creationTime);
        const currentTime = new Date();

        const endTimeToSeconds =
            (challengeCreationTime.getMinutes() + 19) * 60 +
            challengeCreationTime.getSeconds();
        const currentTimeToSeconds =
            currentTime.getMinutes() * 60 + currentTime.getSeconds();

        const restantTimeInSeconds = endTimeToSeconds - currentTimeToSeconds;

        if (restantTimeInSeconds <= 0) navigate("/completed/" + id);

        setSeconds(restantTimeInSeconds);
    };

    useEffect(() => {
        const handleBackToPage = () => {
            handleGetSeconds();
        };

        window.addEventListener("focus", handleBackToPage);

        return () => {
            window.removeEventListener("focus", handleBackToPage);
        };
    }, []);

    useEffect(() => {
        if (isNaN(seconds) && challenge !== null) handleGetSeconds();
    }, [seconds, challenge]);

    useEffect(() => {
        if (seconds < 0 && !isNaN(seconds)) navigate("/completed/" + id);

        const idTimeout = setTimeout(() => {
            setSeconds(seconds - 1);
            setMinutes(Math.floor(seconds / 60));
            setSecondsInFormat(seconds % 60);
        }, 1000);

        return () => clearTimeout(idTimeout);
    }, [seconds]);

    return (
        <div className="flex fixed sm:relative top-0 left-0 mt-2 pl-4 sm:pl-0 font-bold sm:font-normal">
            <div className="flex space-x-2 text-gray-600 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-clock-hour-12"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 7v5"></path>
                </svg>
                <span className="text-xl">
                    {minutes}:
                    {secondsInFormat < 10
                        ? "0" + secondsInFormat
                        : secondsInFormat}
                </span>
            </div>
        </div>
    );
};
