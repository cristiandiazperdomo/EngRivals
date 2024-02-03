import {useEffect, useState} from "react";
import "./SpeechBubbles.css";
const synth = window.speechSynthesis;

export const SpeechBubble = ({title, position, hidden, response}) => {
    const [seconds, setSeconds] = useState(0);
    const [isAudioOn, setIsAudioOn] = useState(false);

    const handleListenEvent = async (e) => {
        e.preventDefault();

        const utterThis = new SpeechSynthesisUtterance(response);

        const voices = synth.getVoices();

        utterThis.voice = voices[1];
        speechSynthesis.speak(utterThis);

        if (speechSynthesis.speaking) setIsAudioOn(true);
    };

    useEffect(() => {
        if (!synth.speaking || !isAudioOn) return;

        const idInterval = setInterval(() => {
            if (synth.speaking === false) {
                setIsAudioOn(false);
                clearInterval(idInterval);
            }
            setSeconds(seconds + 1);
        }, 1000);

        return () => {
            clearInterval(idInterval);
        };
    }, [seconds, isAudioOn]);

    return (
        <div className={`speech ${position}`}>
            {hidden ? (
                <span className="flex -mb-5">
                    {isAudioOn ? (
                        <div className="loadership_TIVIK">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-volume-2 hover:text-gray-300 cursor-pointer w-8 h-8"
                            onClick={handleListenEvent}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 8a5 5 0 0 1 0 8" />
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                        </svg>
                    )}
                    <span className="mt-2 ml-2">___________</span>
                </span>
            ) : (
                title
            )}
        </div>
    );
};
