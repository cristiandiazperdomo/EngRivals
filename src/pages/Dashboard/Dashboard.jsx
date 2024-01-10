import {useContext} from "react";
import {ChallengeCard} from "../../components/Cards/ChallengeCard";
import {Lobbies} from "../../components/Lobbies/Lobbies";
import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBar} from "../../components/SideBar/SideBar";
import {MyContext} from "../../context/AppContext";

export const Dashboard = () => {
    const {isSideBarActive} = useContext(MyContext);

    return (
        <div>
            <LoggedHeader />
            <SideBar />
            <div
                className={`px-4 transition-all duration-500 ${
                    isSideBarActive ? "ml-64" : "container mx-auto"
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
                        <ChallengeCard
                            category="Groceries"
                            videoUrl="https://i.imgur.com/Yq8xKOM.mp4"
                        />
                        <ChallengeCard
                            category="Small Talk"
                            videoUrl="https://i.imgur.com/os2iEWc.mp4"
                        />
                        <ChallengeCard
                            category="Work"
                            videoUrl="https://i.imgur.com/WZ7UKpl.mp4"
                        />
                        <ChallengeCard
                            category="Vacations"
                            videoUrl="https://i.imgur.com/e6B849D.mp4"
                        />
                    </div>
                    <h3 className="text-3xl font-bold text-red-700 my-12">
                        Lobbies
                    </h3>
                    <div className="my-12">
                        <Lobbies />
                    </div>
                </div>
            </div>
        </div>
    );
};
