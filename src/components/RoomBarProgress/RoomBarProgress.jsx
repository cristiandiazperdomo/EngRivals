import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const RoomBarProgress = () => {
    const [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] =
        useState(0);

    const {challenge} = useSelector((state) => state.challengeReducer);
    const {userInfo} = useSelector((state) => state.userReducer);

    useEffect(() => {
        if (challenge !== null || !(challenge instanceof Promise)) {
            let counter = 0;

            challenge?.questions?.forEach((question) => {
                question.answers?.forEach((answer) => {
                    if (answer.userId === userInfo?.id) counter++;
                });
            });
            setNumberOfAnsweredQuestions(counter);
        }
    }, [challenge]);

    return (
        <div className="mx-0 sm:mx-4 w-full h-6 bg-gray-200 rounded-full">
            <div
                className="transition-all duration-500 h-6 bg-black rounded-full"
                style={{
                    width:
                        Math.floor(
                            (numberOfAnsweredQuestions * 100) /
                                challenge?.questions?.length
                        ) + "%",
                }}
            ></div>
        </div>
    );
};
