import {useEffect, useState} from "react";
import {PieTimer} from "../PieTimer/PieTimer";
import {ProfilePicture} from "../../components/ProfilePicture/ProfilePicture";

import gameFound from "../../assets/game-found.wav";
import {useSelector} from "react-redux";

const audio = new Audio(gameFound);

export const PreparingGame = ({seconds}) => {
    const [opponentInfo, setOpponentInfo] = useState(null);
    const {challenge} = useSelector((state) => state.challengeReducer);
    const {userInfo} = useSelector((state) => state.userReducer);

    const getOpponentInfo = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/" +
                    challenge.players.find(
                        (player) => player.userId != userInfo?.id
                    )?.userId,
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            setOpponentInfo(await response.json());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOpponentInfo();
        audio.volume = 0.5;
        audio.play();
    }, []);

    return (
        <div
            className={`flex-col absolute bg-white z-50 top-0 left-0 bottom-0 right-0 ${
                seconds <= 0 ? "hidden" : "flex"
            } justify-center items-center w-full h-screen`}
        >
            <div className="animate-pulse flex flex-col items-center justify-center -mt-60 space-y-12">
                <div className="font-bold text-2xl">{challenge?.title}</div>
                <div className="space-x-12 flex">
                    {
                        <div className="flex w-full text-center space-x-6">
                            <div className="relative flex flex-col items-center w-full text-center space-y-2">
                                <ProfilePicture name={userInfo?.name} />
                                <p>{userInfo?.name}</p>
                                <div className="flex text-2xl absolute -top-8 left-5 bg-black rounded-xl p-1">
                                    <div className="relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-stars-filled w-6 text-yellow-400 relative"
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
                                            <path
                                                d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span
                                            className="bg-white bg-opacity-75 p-0.5 absolute rounded-xl animate-zoom-in top-1.5 right-3"
                                            style={{
                                                animationTimingFunction:
                                                    "steps(52)",
                                                animationIterationCount:
                                                    "infinite",
                                                animationDuration: "3000ms",
                                            }}
                                        ></span>
                                    </div>
                                    <span className="font-black text-xl text-white">
                                        {userInfo?.score}
                                    </span>
                                </div>
                            </div>
                            <div className="font-bold text-xl mt-2">
                                {seconds}
                            </div>
                            <div className="relative flex flex-col items-center w-full text-center space-y-2">
                                <ProfilePicture name={opponentInfo?.name} />
                                <p>{opponentInfo?.name}</p>
                                <div className="flex text-2xl absolute -top-8 left-5 bg-black rounded-xl p-1">
                                    <div className="relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-stars-filled w-6 text-yellow-400 relative"
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
                                            <path
                                                d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span
                                            className="bg-white bg-opacity-75 p-0.5 absolute rounded-xl animate-zoom-in top-1.5 right-3"
                                            style={{
                                                animationTimingFunction:
                                                    "steps(52)",
                                                animationIterationCount:
                                                    "infinite",
                                                animationDuration: "3000ms",
                                            }}
                                        ></span>
                                    </div>
                                    <span className="font-black text-xl text-white">
                                        {opponentInfo?.score}
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* <PieTimer seconds={seconds} /> */}
        </div>
    );
};
