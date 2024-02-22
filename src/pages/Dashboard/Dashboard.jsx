import {useContext, useEffect} from "react";
import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {MyContext} from "../../context/AppContext";
import {TopSideBar} from "../../components/TopSideBar/TopSideBar";
import {Button} from "@radix-ui/themes";
import swords from "../../assets/swords.svg";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {getChallengeSuccess} from "../../redux/actions/challengeActions";

export const Dashboard = () => {
    const {isSideBarActive} = useContext(MyContext);
    const {userInfo} = useSelector((state) => state.userReducer);
    const {challenge} = useSelector((state) => state.challengeReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
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
            },
            (error) => {
                console.error("Error al conectar:", error);
            }
        );
    }, [userInfo]);

    useEffect(() => {
        if (challenge !== null) {
            navigate("/rooms/" + challenge.id);
        }
    }, [challenge]);

    return (
        <div>
            <LoggedHeader />
            <div
                className={`flex justify-between flex-col lg:flex-row px-8 ${
                    isSideBarActive
                        ? "sm:ml-64 mr-8 sm:mr-12"
                        : "container mx-auto sm:pr-12"
                }`}
            >
                <SideBarLeft />
                <div
                    className={` ${
                        isSideBarActive ? "" : ""
                    } transition-all duration-500 w-[100%] lg:w-[800px]`}
                >
                    <div className="rounded-lg dark:border-gray-700">
                        <div className="my-12 w-full">
                            <h2 className="text-3xl font-bold text-red-700">
                                Home
                            </h2>
                            <p className="text-gray-600 animate-fade-in">
                                See what's new and what's coming
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-red-700">
                                Your Hub for Competitively Learning English!
                            </h3>
                            <p className="text-gray-700 my-6 animate-fade-in">
                                At EngRivals, you don't just learn English; you
                                master it competitively. Our platform offers you
                                a unique experience designed for those aiming to
                                excel in their English proficiency and stand out
                                in any competitive environment.
                            </p>
                            <Link to="/grouplessons">
                                <Button
                                    size="4"
                                    className="transition-all duration-100 bg-red-500 w-100 h-[44px] hover:bg-red-700"
                                >
                                    <img
                                        src={swords}
                                        alt="sword"
                                        className="animate-fade-in w-6"
                                    />
                                    Start Now
                                </Button>
                            </Link>
                        </div>
                        <div className="my-12">
                            <h3 className="text-3xl font-bold text-red-700 mb-2">
                                What Sets Us Apart?
                            </h3>
                            <ul className="max-w-md xl:max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Daily Challenges:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Take on daily learning challenges that
                                        will test your skills in grammar,
                                        vocabulary, and comprehension. Earn
                                        points and improve your position on our
                                        global leaderboard.
                                    </span>
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Live Competitions:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Participate in real-time competitions
                                        with students from around the world.
                                        Test your knowledge in simulated
                                        competitive environments for a
                                        one-of-a-kind learning experience.
                                    </span>
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Interactive Courses:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Our courses are crafted to keep you
                                        engaged and motivated. You'll learn not
                                        just effectively but also excitingly.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-red-700 mb-2">
                                Why Choose Us?
                            </h3>
                            <ul className="max-w-md xl:max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Elite Community:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Connect with other serious learners and
                                        expert teachers. Together, we make
                                        EngRivals an exceptional place to learn.
                                    </span>
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Your Position on the Leaderboard:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Conquer the top of the leaderboard. Your
                                        achievements inspire others and serve as
                                        proof of your language mastery!
                                    </span>
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Unlocked Achievements:
                                    </span>{" "}
                                    <span className="animate-fade-in">
                                        Celebrate your milestones and unlock
                                        achievements as you progress. Each step
                                        is an accomplishment bringing you closer
                                        to mastery.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <TopSideBar />
            </div>
        </div>
    );
};
