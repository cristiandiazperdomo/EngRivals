import famaleAvatar from "../../assets/famale-avatar.svg";
import menAvatar from "../../assets/men-avatar.svg";
import {SpeechBubble} from "./SpeechBubbles";

export const PeopleTalking = ({instruction, title, response}) => {
    return (
        <div className="text-center flex flex-col justify-center sm:items-center my-4 max-w-[540px]">
            <header className="mt-0 my-3 sm:my-12">
                <p className="text-right sm:text-center text-xl sm:text-3xl font-bold">
                    {instruction}
                </p>
            </header>
            <div className="flex flex-col items-start w-full rounded-xl p-4 sm:py-12 space-y-4">
                <div className="flex space-x-6  w-full">
                    <img
                        src={menAvatar}
                        alt="famale-avatar"
                        className="w-20 h-20"
                    />
                    <SpeechBubble
                        position="left"
                        hidden={false}
                        title={title}
                    />
                </div>
                <div className="flex space-x-6 h-20 w-full justify-end">
                    <SpeechBubble
                        position="right"
                        hidden={true}
                        title={title}
                        response={response}
                    />
                    <img
                        src={famaleAvatar}
                        alt="men-avatar"
                        className="w-20 h-20"
                    />
                </div>
            </div>
        </div>
    );
};
