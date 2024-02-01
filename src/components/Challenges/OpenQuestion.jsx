import {OptionsList} from "./OptionsList";
import {PeopleTalking} from "../PeopleTalking/PeopleTalking";
import {useEffect} from "react";

export const OpenQuestion = ({optionsList, currentQuestion}) => {
    return (
        <div className="flex flex-col justify-between mt-12 sm:-mt-20 md:-mt-44">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[540px]">
                        <PeopleTalking
                            instruction="Choose the Right Option"
                            title={currentQuestion?.title}
                            response={
                                currentQuestion?.options?.find(
                                    (option) => option.visibleIsCorrect
                                )?.name
                            }
                        />
                        <OptionsList
                            options={currentQuestion?.options}
                            optionsList={optionsList}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
