import {useState} from "react";
import {Word} from "./Word";
import {PhraseCard} from "../Cards/PhraseCard";

const phrase = "Hello. How are you? Are you Doctor Esteban? Yes, i am.";

export const CompletePhrase = () => {
    const separateWords = (phrase) => {
        return phrase.split(" ");
    };

    const [originalPhrase, setOriginalPhrase] = useState(separateWords(phrase));
    const [userPhrase, setUserPhrase] = useState([]);
    const [isTheWordUsed, setIsTheWordUsed] = useState(false);

    const handleRemoveFromUserPhrase = (position) => {
        setUserPhrase(
            [...userPhrase].filter((word, index) => index !== position)
        );
    };

    const handleAddToUserPhrase = (word) =>
        setUserPhrase([...userPhrase, word]);

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <PhraseCard title={phrase} instruction="Complete these phrase" />
            <div className="w-[540px] h-[400px] space-y-14">
                <div className="flex flex-wrap gap-2 min-h-[124px] border-b-2 pb-2">
                    {userPhrase.map((word, index) => (
                        <span
                            key={index}
                            className="bg-transparent p-3 border rounded-full w-100 max-h-12 border-2 cursor-pointer"
                            onClick={() => handleRemoveFromUserPhrase(index)}
                        >
                            {word.word}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    {originalPhrase.map((word, index) => (
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
