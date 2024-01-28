import {Button} from "@radix-ui/themes";
import {RoomBarProgress} from "../RoomBarProgress/RoomBarProgress";
import {Timer} from "../Timer/Timer";
import {useEffect} from "react";

export const RoomFooter = ({isRight, showResult, submit, next, skip, time}) => {
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
                isRight ? "bg-green-200" : "bg-red-200"
            } border-t flex justify-center items-center`}
        >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between w-full mx-4 lg:mx-0 md:w-[800px] lg:w-[1000px] xl:w-[1200px] py-4 sm:py-12">
                {!showResult && (
                    <Button
                        size="4"
                        variant="outline"
                        color="green"
                        className="hidden sm:flex text-black w-[140px] sm:w-[160px] hover:bg-green-100 bg-transparent"
                        onClick={skip}
                    >
                        Skip
                    </Button>
                )}
                <Timer time={time} />
                <div className="sm:flex sm:hidden">
                    <RoomBarProgress />
                </div>
                {showResult ? (
                    <Button
                        size="4"
                        variant="soft"
                        className={`border-b-4 text-black w-full sm:w-[160px] ${
                            isRight
                                ? "bg-green-400 hover:bg-green-500"
                                : "bg-red-400 hover:bg-red-500"
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
