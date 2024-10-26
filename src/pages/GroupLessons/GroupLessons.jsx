import {useState, useContext, useEffect} from "react";
import {ChallengeCard} from "../../components/Cards/ChallengeCard";
import {Lobbies} from "../../components/Lobbies/Lobbies";
import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {MyContext} from "../../context/AppContext";
import {LoaderScreen} from "../../components/LoaderScreen/LoaderScreen";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    cancelCreateLobby,
    createChallenge,
    getChallengeSuccess,
    joinToChallenge,
} from "../../redux/actions/challengeActions";

import grammar from "../../assets/grammar.svg";
import actions from "../../assets/actions.svg";
import vocabulary from "../../assets/vocabulary.svg";
import prepositions from "../../assets/prepositions.svg";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {UserPositionInTop} from "../../components/UserPositionInTop/UserPositionInTop";

const challengeCards = [
    {
        category: "Grammar",
        image: grammar,
        categoryId: 1,
    },
    {
        category: "Prepositions",
        image: prepositions,
        categoryId: 2,
    },
    {
        category: "Verbs",
        image: actions,
        categoryId: 3,
    },
    {
        category: "Vocabulary",
        image: vocabulary,
        categoryId: 4,
    },
];

export const GroupLessons = () => {
    const [showLoaderScreen, setShowLoaderScreen] = useState(false);
    const [titleLoader, setTitleLoader] = useState("");
    const {isSideBarActive} = useContext(MyContext);
    const [client, setClient] = useState(null);
    const [isLookingForAGame, setIsLookingForAGame] = useState(false);
    const [categorySelected, setCategorySelected] = useState("");
    const [hasTheLessonBeenCanceled, setHasTheLessonBeenCanceled] =
        useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {challenge} = useSelector((state) => state.challengeReducer);
    const {userInfo} = useSelector((state) => state.userReducer);

    const handleCancelCreateLobby = () => {
        if (client === null) return;
        if (!isLookingForAGame) return;
        if (userInfo === null) return;

        dispatch(cancelCreateLobby(client));
        setHasTheLessonBeenCanceled(true);
    };

    const handleCreateLobby = (categoryId) => {
        if (client === null) return;
        if (isLookingForAGame) return;
        setTitleLoader(challengeCards[categoryId - 1].category);
        setCategorySelected(challengeCards[categoryId - 1].category);
        dispatch(createChallenge(categoryId, client, userInfo, navigate));
    };

    const handleJoinALesson = (lobby) => {
        const {challengeId, isFull} = lobby;
        if (isFull) return;
        dispatch(joinToChallenge(challengeId, client, userInfo, navigate));
    };

    const handleCreateRandomLesson = () => {
        if (isLookingForAGame) return;
        const max = 4;
        const min = 1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        handleCreateLobby(randomNumber);
    };

    useEffect(() => {
        if (client !== null) return;
        if (userInfo === null) return;

        const socket = new SockJS("http://localhost:8080/ws");
        const stompClientInstance = Stomp.over(socket);

        stompClientInstance.connect(
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            (frame) => {
                stompClientInstance.subscribe(
                    "/rooms/join/" + userInfo.id,
                    (message) => {
                        const challenge = JSON.parse(message.body);
                        if (challenge.status) {
                            alert(challenge.status);
                        } else {
                            dispatch(getChallengeSuccess(challenge));
                        }
                    },
                    {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    }
                );
                setClient(stompClientInstance);
            },
            (error) => {
                console.error("Error al conectar:", error);
            }
        );

        return () => {
            if (stompClientInstance && stompClientInstance.connected) {
                stompClientInstance.disconnect();
            }
        };
    }, [userInfo]);

    useEffect(() => {
        if (challenge !== null) {
            navigate("/rooms/" + challenge.id);
        }
    }, [challenge]);

    return (
        <div className="">
            {showLoaderScreen && (
                <LoaderScreen
                    setShowLoaderScreen={setShowLoaderScreen}
                    title={titleLoader}
                />
            )}
            <LoggedHeader />
            <SideBarLeft />
            <div
                className={`px-4 transition-all duration-500 ${
                    isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                }`}
            >
                <div className="px-4 rounded-lg dark:border-gray-700">
                    <div className="my-10 flex items-center justify-between">
                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row w-full justify-between">
                                <h2 className="text-3xl font-bold text-red-700">
                                    Group Lessons for A1-A2
                                </h2>
                                <UserPositionInTop score={userInfo?.score} />
                            </div>
                            <p className="text-gray-600">
                                Welcome to group lessons, where you practice
                                challenging other users.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-0 gap-y-4 sm:gap-x-4 md:gap-4 animate-fade-in">
                        {challengeCards.map((challenge) => (
                            <ChallengeCard
                                key={challenge.category}
                                category={challenge.category}
                                image={challenge.image}
                                hasTheLessonBeenCanceled={
                                    hasTheLessonBeenCanceled
                                }
                                setHasTheLessonBeenCanceled={
                                    setHasTheLessonBeenCanceled
                                }
                                handleCreateLobby={() =>
                                    handleCreateLobby(challenge.categoryId)
                                }
                                isLookingForAGame={isLookingForAGame}
                                categorySelected={categorySelected}
                                handleCancelCreateLobby={
                                    handleCancelCreateLobby
                                }
                            />
                        ))}
                    </div>
                    <Lobbies
                        setIsLookingForAGame={setIsLookingForAGame}
                        setCategorySelected={setCategorySelected}
                        handleJoinALesson={handleJoinALesson}
                        handleCreateRandomLesson={handleCreateRandomLesson}
                        userInfo={userInfo}
                    />
                </div>
            </div>
        </div>
    );
};
