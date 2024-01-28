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

const challengeCards = [
    {
        category: "Small Talk",
        videoUrl: "https://i.imgur.com/os2iEWc.mp4",
    },
    {
        category: "Work",
        videoUrl: "https://i.imgur.com/WZ7UKpl.mp4",
    },
    {
        category: "Groceries",
        videoUrl: "https://i.imgur.com/Yq8xKOM.mp4",
    },
    {
        category: "Vacations",
        videoUrl: "https://i.imgur.com/e6B849D.mp4",
    },
];

export const GroupChallenges = () => {
    const [showLoaderScreen, setShowLoaderScreen] = useState(false);
    const {isSideBarActive} = useContext(MyContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateLobby = () => {
        setShowLoaderScreen(true);
        dispatch(createChallenge(navigate));
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
                    <div className="my-12">
                        <h2 className="text-3xl font-bold text-red-700">
                            Group Challenges for A1
                        </h2>
                        <p className="text-gray-600">
                            Welcome to group challenges, where you practice
                            challenging other users
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {challengeCards.map((challenge) => (
                            <ChallengeCard
                                key={challenge.category}
                                category={challenge.category}
                                videoUrl={challenge.videoUrl}
                                handleCreateLobby={handleCreateLobby}
                            />
                        ))}
                    </div>
                    <h3 className="text-3xl font-bold text-red-700 my-12">
                        Lobbies
                    </h3>
                    <div className="my-12">
                        <Lobbies handleCreateLobby={handleCreateLobby} />
                    </div>
                </div>
            </div>
        </div>
    );
};
