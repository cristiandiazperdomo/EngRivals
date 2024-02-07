import {useState, useContext} from "react";
import {ChallengeCard} from "../../components/Cards/ChallengeCard";
import {Lobbies} from "../../components/Lobbies/Lobbies";
import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {MyContext} from "../../context/AppContext";
import {LoaderScreen} from "../../components/LoaderScreen/LoaderScreen";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createChallenge} from "../../redux/actions/challengeActions";

import grammar from "../../assets/grammar.svg";
import actions from "../../assets/actions.svg";
import vocabulary from "../../assets/vocabulary.svg";
import prepositions from "../../assets/prepositions.svg";

const challengeCards = [
    {
        category: "Grammar",
        image: grammar,
        txt: "Grammar",
        categoryId: 1,
    },
    {
        category: "Prepositions",
        image: prepositions,
        txt: "Prepositions",
        categoryId: 2,
    },
    {
        category: "Verbs",
        image: actions,
        txt: "Verbs",
        categoryId: 3,
    },
    {
        category: "Vocabulary",
        image: vocabulary,
        txt: "Vocabulary",
        categoryId: 4,
    },
];

export const GroupChallenges = () => {
    const [showLoaderScreen, setShowLoaderScreen] = useState(false);
    const {isSideBarActive} = useContext(MyContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateLobby = (categoryId) => {
        setShowLoaderScreen(true);
        dispatch(createChallenge(navigate, categoryId));
    };

    return (
        <div>
            {showLoaderScreen && (
                <LoaderScreen setShowLoaderScreen={setShowLoaderScreen} />
            )}
            <LoggedHeader />
            <SideBarLeft />
            <div
                className={`px-4 transition-all duration-500 ${
                    isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                }`}
            >
                <div className="px-4 rounded-lg dark:border-gray-700">
                    <div className="my-12 flex items-center justify-between">
                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row w-full justify-between">
                                <h2 className="text-3xl font-bold text-red-700">
                                    Group Challenges for A1-A2
                                </h2>
                                <div className="flex flex-wrap justify-end items-center my-2 sm:my-0 sm:mr-4 w-100">
                                    <div className="flex text-2xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-trophy-filled w-8 text-yellow-400"
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
                                                d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                                                strokeWidth="0"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="font-black text-2xl text-gray-600">
                                            1235
                                        </span>
                                    </div>
                                    <div className="flex text-yellow-600 text-2xl ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-stars w-7 text-yellow-400"
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
                                        <span className="font-black text-2xl text-gray-600">
                                            1200
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Welcome to group challenges, where you practice
                                challenging other users.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-0 gap-y-4 sm:gap-x-4 md:gap-4">
                        {challengeCards.map((challenge) => (
                            <ChallengeCard
                                key={challenge.category}
                                category={challenge.category}
                                image={challenge.image}
                                txt={challenge.txt}
                                handleCreateLobby={() =>
                                    handleCreateLobby(challenge.categoryId)
                                }
                            />
                        ))}
                    </div>
                    <h3 className="text-3xl font-bold text-red-700 my-12">
                        Lobbies
                    </h3>
                    <div className="my-12 mb-2 pr-4">
                        <Lobbies handleCreateLobby={"handleCreateLobby"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
