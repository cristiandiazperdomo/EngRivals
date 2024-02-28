import {Button} from "@radix-ui/themes";
import {RoomBarProgress} from "../RoomBarProgress/RoomBarProgress";
import {Timer} from "../Timer/Timer";
import {useEffect} from "react";

export const RoomFooter = (props) => {
    const {currentQuestion, answer, showResult, submit, next, skip} = props;

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();
            if (e.key === "Enter" && !showResult) {
                submit();
            }
            if (e.key === "Enter" && showResult) {
                next();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showResult, submit, next]);

    return (
        <footer
            className={`${showResult ? "" : "bg-white"} ${
                answer?.isCorrect ? "bg-green-200" : "bg-red-200"
            } border-t flex justify-center items-center h-100 sm:h-[150px] py-4`}
        >
            <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 justify-between w-full mx-4 lg:mx-0 md:w-[800px] lg:w-[1000px] xl:w-[1200px]">
                {showResult ? (
                    <>
                        {answer?.isCorrect ? (
                            <div className="flex sm:items-center space-x-4 w-full sm:w-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-check p-1 sm:p-4 self-center h-12 sm:max-h-20 sm:h-20 text-green-400 bg-white rounded-full"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                                {currentQuestion.options.some(
                                    (option) => option.explanation !== null
                                ) ? (
                                    <div className="flex flex-col">
                                        <p className="font-black text-xl text-green-800">
                                            Explanation:
                                        </p>
                                        <p className="text-green-800">
                                            {
                                                currentQuestion?.options?.find(
                                                    (option) =>
                                                        option.explanation !==
                                                        null
                                                )?.explanation
                                            }
                                        </p>
                                    </div>
                                ) : (
                                    <div className="">
                                        <p className="font-black text-xl text-green-800">
                                            Correct Answer:
                                        </p>
                                        <p className="text-green-800">
                                            {answer?.correctAnswer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex sm:items-center space-x-4 w-full sm:w-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-x p-1 sm:p-4 self-center h-12 sm:max-h-20 sm:h-20 text-red-400 bg-white rounded-full"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                                {currentQuestion.options.some(
                                    (option) => option.explanation !== null
                                ) ? (
                                    <div className="flex flex-col">
                                        <p className="font-black text-xl text-red-800">
                                            Explanation:
                                        </p>
                                        <p className="text-red-800">
                                            {
                                                currentQuestion?.options?.find(
                                                    (option) =>
                                                        option.explanation !==
                                                        null
                                                )?.explanation
                                            }
                                        </p>
                                    </div>
                                ) : (
                                    <div className="">
                                        <p className="font-black text-xl text-red-800">
                                            Correct Answer:
                                        </p>
                                        <p className="text-red-800">
                                            {answer?.correctAnswer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <button
                        size="4"
                        className="hidden sm:flex transition-all duration-200 text-black text-gray-400 w-[140px] sm:w-[160px] bg-transparent border-2 justify-center border-gray-300 hover:text-gray-700 hover:border-gray-700 p-2.5 rounded-xl"
                        onClick={skip}
                    >
                        Skip
                    </button>
                )}
                <Timer />
                <div className="flex sm:hidden w-full">
                    <RoomBarProgress />
                </div>
                {showResult ? (
                    <Button
                        size="4"
                        variant="soft"
                        className={`border-b-4 text-black w-full sm:w-[160px] ml-0 sm:ml-2 ${
                            answer?.isCorrect
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-red-500 hover:bg-red-600"
                        }  transition-all duration-200`}
                        onClick={next}
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        size="4"
                        variant="soft"
                        className="border-b-4 text-black w-full sm:w-[160px] bg-green-200 hover:bg-green-300 transition-all duration-200"
                        onClick={submit}
                    >
                        Submit
                    </Button>
                )}
            </div>
        </footer>
    );
};
