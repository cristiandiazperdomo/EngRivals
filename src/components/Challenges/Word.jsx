export const Word = ({
    indexOriginalPhrase,
    word,
    userPhrase,
    handleAddToUserPhrase,
}) => {
    const handleIsWordUsed = () => {
        if (userPhrase === undefined || userPhrase.length === 0) return false;

        return userPhrase.some(
            (userWord) => userWord.indexOriginalPhrase === indexOriginalPhrase
        );
    };

    const handleClick = () => {
        if (handleIsWordUsed()) return;
        handleAddToUserPhrase({indexOriginalPhrase, word});
    };

    return (
        <span
            className={`p-2 sm:p-3 border rounded-full w-100 border-2 ${
                handleIsWordUsed() ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={handleClick}
        >
            <span
                className={`transition-all duration-400 ${
                    handleIsWordUsed() ? "opacity-0" : "opacity-100"
                }`}
            >
                {word}
            </span>
        </span>
    );
};
