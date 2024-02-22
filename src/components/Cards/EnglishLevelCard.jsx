import {FlyingAKite} from "../Svg/FlyingAKite";

export const EnglishLevelCard = ({level, description, showLevel, index}) => {
    return (
        <div
            className={`${
                showLevel === index
                    ? "transition-all duration-300 flex opacity-100 flex flex-col items-center w-full justify-center sm:flex-row sm:items-start"
                    : "hidden opacity-0"
            } `}
        >
            <div className="flex flex-col sm:flex-row">
                <FlyingAKite />
            </div>
            <div className="text-center sm:text-left">
                <p className="font-bold text-3xl">{level}</p>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};
