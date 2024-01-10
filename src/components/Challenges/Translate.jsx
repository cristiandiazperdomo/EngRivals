import {useState, useEffect} from "react";
import {PhraseCard} from "../Cards/PhraseCard";
import {QuizOptionButton} from "../Button/QuizOptionButton";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "@radix-ui/themes";

export const Translate = () => {
    const [stars, setStars] = useState(9999);
    const [useButtons, setUseButtons] = useState(false);

    useEffect(() => {
        if (stars > 0) {
            const idTimeout = setTimeout(() => {
                setStars(stars - 1);
            }, 30);
            return () => clearTimeout(idTimeout);
        }
    }, [stars]);

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="mx-4 flex flex-col items-center">
                <header className="flex justify-center items-center w-100 md:w-[800px] lg:w-[1000px] xl:w-[1200px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x text-gray-400 cursor-pointer"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                    <div className="mx-4 w-full my-16 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                            className="h-6 bg-gradient-to-b from-green-600 to-green-400 rounded-full dark:bg-green-500 animation-pulse"
                            style={{width: "45%"}}
                        ></div>
                    </div>
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-stars-filled text-yellow-600"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z"
                                strokeWidth="0"
                                fill="currentColor"
                            />
                            <path
                                d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                strokeWidth="0"
                                fill="currentColor"
                            />
                            <path
                                d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                strokeWidth="0"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="font-bold text-3xl ml-2">{stars}</span>
                    </div>
                </header>
                <div
                    className={`flex justify-center items-center text-center
            `}
                >
                    <div className="max-w-[600px]">
                        <header className="my-12">
                            <p className="text-3xl font-bold textLeft">
                                Translate theses phrases in to English
                            </p>
                        </header>
                        <PhraseCard />
                        {useButtons ? (
                            <Textarea />
                        ) : (
                            <ul className="mt-4 space-y-2">
                                <QuizOptionButton
                                    optionLetter="a"
                                    content="¿Dónde están los parques más cercanos aquí en Nueva
                        York, EE. UU.?"
                                />
                                <QuizOptionButton
                                    optionLetter="b"
                                    content="¿Cuáles son los parques más cercanos en esta zona de
                                Nueva York, Estados Unidos?"
                                />
                                <QuizOptionButton
                                    optionLetter="c"
                                    content="¿Dónde puedo encontrar los parques más cercanos aquí
                        en Nueva York, USA?"
                                />
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <footer className="bg-gray-300 flex justify-center items-center">
                <div className="flex justify-between xl:w-[1200px] py-12">
                    <Button
                        size="4"
                        color="green"
                        variant="outline"
                        className="w-[160px]"
                    >
                        Skip
                    </Button>
                    <div className="flex space-x-2 text-gray-600 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-clock-hour-12"
                            width="28"
                            height="28"
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
                        <span className="text-xl">2:12</span>
                    </div>
                    <Button
                        size="4"
                        variant="solid"
                        className="bg-green-600 w-[160px] hover:bg-green-700"
                    >
                        Submit
                    </Button>
                </div>
            </footer>
        </div>
    );
};
