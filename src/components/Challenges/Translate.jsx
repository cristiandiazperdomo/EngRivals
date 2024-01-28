import {useState, useEffect} from "react";
import {PhraseCard} from "../Cards/PhraseCard";
import {QuizOptionButton} from "../Button/QuizOptionButton";
import {Textarea} from "../Textarea/Textarea";

const firstLetter = ["a", "b", "c"];

export const Translate = ({optionsList, title, options}) => {
    const [useButtons, setUseButtons] = useState(false);

    return (
        <div className="flex flex-col justify-between mt-12 sm:-mt-20 md:-mt-44">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[540px]">
                        <PhraseCard
                            title={title}
                            instruction={
                                useButtons
                                    ? "Translate this phrase in to English"
                                    : "Choose the Right Option"
                            }
                        />
                        {useButtons ? (
                            <Textarea />
                        ) : (
                            <ul className="mt-4 space-y-2" ref={optionsList}>
                                {options?.map((option, index) => (
                                    <QuizOptionButton
                                        key={option.id}
                                        optionId={option.id}
                                        optionLetter={firstLetter[index]}
                                        content={option.name}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
