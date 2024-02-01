import {useEffect, useState} from "react";
import {Word} from "./Word";
import {PhraseCard} from "../Cards/PhraseCard";

export const CompletePhrase = ({title, phrase, userPhraseRef}) => {
    const [originalPhrase, setOriginalPhrase] = useState(undefined);
    const [userPhrase, setUserPhrase] = useState([]);

    const separateWords = (phrase) => {
        return phrase.split(" ");
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleRemoveFromUserPhrase = (position) => {
        setUserPhrase(
            [...userPhrase].filter((word, index) => index !== position)
        );
    };

    const handleAddToUserPhrase = (word) =>
        setUserPhrase([...userPhrase, word]);

    useEffect(() => {
        setOriginalPhrase(shuffleArray(separateWords(phrase)));
        setUserPhrase([]);
        console.log("buenas tardes");
    }, [phrase]);
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <PhraseCard title={title} instruction="Complete these phrase" />
            <div className="pb-2 sm:pb-0 w-full h-100 sm:h-[360px] space-y-14">
                <div
                    className="flex flex-wrap gap-2 min-h-[124px] border-b-2 pb-2"
                    ref={userPhraseRef}
                >
                    {userPhrase?.map((word, index) => (
                        <span
                            key={index}
                            className="bg-transparent p-2 sm:p-3 border rounded-full w-100 max-h-12 border-2 cursor-pointer"
                            onClick={() => handleRemoveFromUserPhrase(index)}
                        >
                            {word.word}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    {originalPhrase?.map((word, index) => (
                        <Word
                            indexOriginalPhrase={index}
                            word={word}
                            userPhrase={userPhrase}
                            handleAddToUserPhrase={handleAddToUserPhrase}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
