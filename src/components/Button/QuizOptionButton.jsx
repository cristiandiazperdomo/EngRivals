export const QuizOptionButton = ({optionId, optionLetter, content}) => {
    return (
        <li id={optionId}>
            <input
                type="radio"
                id={optionLetter}
                name="answer"
                value="hosting-small"
                className="hidden peer mr-4 w-8"
            />
            <label
                htmlFor={optionLetter}
                className="transition-all duration-100 text-gray-700 flex items-center text-left bg-transparent hover:bg-gray-100 border-2 py-3 font-normal rounded-xl w-full peer-checked:border-2 peer-checked:text-gray-900 peer-checked:border-yellow-500 cursor-pointer"
            >
                <div className="rounded-lg border-r-2 ml-4 py-1 px-2.5 pr-3">
                    {optionLetter}
                </div>
                <span className="mx-4">{content}</span>
            </label>
        </li>
    );
};
