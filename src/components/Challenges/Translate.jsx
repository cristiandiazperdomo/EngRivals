import {useState, useEffect} from "react";
import {PhraseCard} from "../Cards/PhraseCard";
import {QuizOptionButton} from "../Button/QuizOptionButton";
import {Textarea} from "../Textarea/Textarea";

const phrase = "Hello. How are you? Are you Doctor Esteban? Yes, i am.";

export const Translate = () => {
    const [useButtons, setUseButtons] = useState(false);

    return (
        <div className="flex flex-col justify-between mt-12 sm:-mt-20 md:-mt-44">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-center">
                    <div className="max-w-[540px]">
                        <PhraseCard
                            title={phrase}
                            instruction={
                                useButtons
                                    ? "Translate this phrase in to English"
                                    : "Choose the Right Option"
                            }
                        />
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
        </div>
    );
};
