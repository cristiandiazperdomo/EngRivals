import {useEffect} from "react";

import searching from "../../assets/searching.svg";
import {Loader} from "../Loader/Loader";

const advices = ["We are searching for an opponent for you."];

export const LoaderScreen = ({setShowLoaderScreen, title}) => {
    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setShowLoaderScreen(false);
        }, 3000);

        return () => clearTimeout(idTimeout);
    }, []);
    return (
        <div
            className="fixed flex flex-col justify-center items-center min-h-screen min-w-full bg-black bg-opacity-40"
            style={{zIndex: 100}}
        >
            <div className="flex flex-col pb-12 pt-16 px-8 text-center text-white rounded-xl w-[300px] sm:w-[520px] bg-gray-50 border shadow-2xl">
                <p className="uppercase text-black text-xl font-black">
                    {title}
                </p>
                <img src={searching} alt="searching" className="w-80 mx-auto" />
                <Loader />
                <span className="font-bold mt-8 text-gray-400">LOADING...</span>
                <span className="font-bold mt-2 text-black">
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
