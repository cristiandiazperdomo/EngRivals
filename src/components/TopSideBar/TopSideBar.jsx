import {useEffect, useState} from "react";
import {TopCard} from "../Cards/TopCard";

export const TopSideBar = () => {
    const [topMostWinners, setTopMostWinners] = useState([]);
    const [topFiveScore, setTopFiveScore] = useState([]);
    const [topFiveExp, setTopFiveExp] = useState([]);

    useEffect(() => {
        const getTopMostWinners = async () => {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/top-most-winners",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            setTopMostWinners(await response.json());
        };

        const getTopFiveScore = async () => {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/top-five-score",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            setTopFiveScore(await response.json());
        };

        const getTopFiveExperience = async () => {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/top-five-experience",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            setTopFiveExp(await response.json());
        };

        getTopMostWinners();
        getTopFiveScore();
        getTopFiveExperience();
    }, []);

    return (
        <aside
            id="cta-button-sidebar"
            className="block right-0 z-30 lg:w-[340px] transition-transform"
            aria-label="Sidebar"
        >
            <div className="pb-4 overflow-y-auto pt-8">
                <ul className="h-full space-y-2 font-medium flex flex-col justify-center xl:justify-start">
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trophy-filled text-yellow-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                                strokeWidth="0"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="mb-2 text-sm">TOP FIVE MOST WINNERS</p>
                    </li>
                    {topMostWinners.map((user, index) => (
                        <TopCard
                            key={index}
                            position={index + 1}
                            name={user.name}
                            score={user.score}
                        />
                    ))}
                </ul>
            </div>
            <div className="pb-4 overflow-y-auto pt-8">
                <ul className="h-full space-y-2 font-medium flex flex-col justify-center xl:justify-start">
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-stars-filled text-yellow-600"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <p className="mb-2 text-sm">TOP FIVE MOST POINTS</p>
                    </li>
                    {topFiveScore.map((user, index) => (
                        <TopCard
                            key={index}
                            position={index + 1}
                            name={user.name}
                            score={user.score}
                        />
                    ))}
                </ul>
            </div>
            <div className="pb-4 overflow-y-auto pt-6">
                <ul className="h-full space-y-2 font-medium flex flex-col justify-center xl:justify-start">
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-stars-filled text-purple-800"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <p className="mb-2 text-sm">TOP FIVE MOST EXPERIENCE</p>
                    </li>
                    {topFiveExp.map((user, index) => (
                        <TopCard
                            key={index}
                            position={index + 1}
                            name={user.name}
                            score={user.score}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
};
