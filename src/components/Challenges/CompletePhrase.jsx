import {useEffect, useState} from "react";
import {Word} from "./Word";
import {PhraseCard} from "../Cards/PhraseCard";
import {DndContext, closestCenter} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import {UserPhrase} from "./UserPhrase";

export const CompletePhrase = ({title, phrase, userPhraseRef}) => {
    const [originalPhrase, setOriginalPhrase] = useState(undefined);
    const [userPhrase, setUserPhrase] = useState([]);

    const separateWords = (phrase) => phrase.split(" ");

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleRemoveFromUserPhrase = (position) => {
        const updatedUserPhrase = [...userPhrase].filter(
            (word, index) => index !== position
        );

        setUserPhrase(
            updatedUserPhrase.map((word, index) => ({...word, id: index + 1}))
        );
    };

    const handleAddToUserPhrase = (word) =>
        setUserPhrase([...userPhrase, word]);

    useEffect(() => {
        setOriginalPhrase(shuffleArray(separateWords(phrase)));
        setUserPhrase([]);
    }, [phrase]);

    const handleDragEnd = (event) => {
        const {active, over} = event;

        const oldIndex = userPhrase.findIndex((word) => word.id === active.id);
        const newIndex = userPhrase.findIndex((word) => word.id === over.id);

        setUserPhrase(arrayMove(userPhrase, oldIndex, newIndex));
    };

    return (
        <div className="flex flex-col w-full items-center justify-center mt-12 sm:mt-0">
            <PhraseCard title={title} instruction="Complete these phrase" />
            <div className="pb-2 sm:pb-0 w-full h-100 sm:h-[360px] space-y-14">
                <div
                    className="flex flex-wrap gap-2 min-h-[124px] border-b-2 pb-2"
                    ref={userPhraseRef}
                >
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={userPhrase}
                            strategy={horizontalListSortingStrategy}
                        >
                            {userPhrase?.map((word, index) => (
                                <UserPhrase
                                    key={index}
                                    remove={handleRemoveFromUserPhrase}
                                    word={word}
                                    position={index}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
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
