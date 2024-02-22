import {useEffect} from "react";
import {PieTimer} from "../PieTimer/PieTimer";

import gameFound from "../../assets/game-found.wav";

const audio = new Audio(gameFound);

export const PreparingGame = ({seconds}) => {
    useEffect(() => {
        audio.volume = 0.5;
        audio.play();
    }, []);

    return (
        <div
            className={`absolute bg-white z-50 top-0 left-0 bottom-0 right-0 ${
                seconds <= 0 ? "hidden" : "flex"
            } justify-center items-center w-full h-screen`}
        >
            <PieTimer seconds={seconds} />
        </div>
    );
};
