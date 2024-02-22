import {useEffect, useState} from "react";
import audio from "../../assets/home-audio.png";
import options from "../../assets/home-options-1.png";
import writing from "../../assets/home-writing-1.png";
import avatar1 from "../../assets/avatar-2.jpg";
import avatar2 from "../../assets/avatar-3.jpg";

export const Carrousel = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            if (counter === 2) setCounter(0);
            else setCounter(counter + 1);
        }, 7000);

        return () => clearTimeout(idTimeout);
    });

    return (
        <div className="hidden md:flex 2xl:hidden relative w-full items-center justify-end animate-fade-in-left">
            <div
                className={`transition-all duration-500 absolute right-0 transition-all opacity-0 ${
                    counter !== 0
                        ? "animate-slide-out-right"
                        : "animate-fade-in-right opacity-100"
                }`}
            >
                <img
                    src={audio}
                    alt="audio"
                    className="md:w-[330px] md:h-[290px] lg:w-[400px] lg:h-[342px]"
                />
                <div className="flex space-x-4 top-[10%] right-[20%] justify-center items-center text-gray-800 mt-4">
                    <img
                        src={avatar1}
                        alt="avatar1"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <span className="font-bold">VS</span>
                    <img
                        src={avatar2}
                        alt="avatar2"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                </div>
            </div>
            <div
                className={`transition-all duration-500 absolute right-0 transition-all opacity-0 ${
                    counter !== 1
                        ? "animate-slide-out-right"
                        : "animate-fade-in-right opacity-100"
                } space-y-4`}
            >
                <img
                    src={writing}
                    alt="writing"
                    className="md:w-[332px] md:h-[225px] lg:w-[404px] lg:h-[285px]"
                />
                <div className="flex space-x-4 top-[10%] right-[20%] justify-center items-center text-gray-800">
                    <img
                        src={avatar1}
                        alt="avatar1"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <span className="font-bold">VS</span>
                    <img
                        src={avatar2}
                        alt="avatar2"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                </div>
            </div>
            <div
                className={`transition-all duration-500 absolute right-0 transition-all opacity-0 ${
                    counter !== 2
                        ? "animate-slide-out-right"
                        : "animate-fade-in-right opacity-100"
                }`}
            >
                <img
                    src={options}
                    alt="options"
                    className="md:w-[330px] md:h-[200px] lg:w-[404px] lg:h-[250px] mb-16"
                />
                <div className="flex space-x-4 top-[10%] right-[20%] justify-center items-center text-gray-800">
                    <img
                        src={avatar1}
                        alt="avatar1"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <span className="font-bold">VS</span>
                    <img
                        src={avatar2}
                        alt="avatar2"
                        className="w-[50px] h-[50px] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
