import {QuizOptionButton} from "../Button/QuizOptionButton";

const firstLetter = ["a", "b", "c"];

export const OptionsList = ({options, optionsList}) => {
    return (
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
    );
};
