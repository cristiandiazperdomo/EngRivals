import {useContext} from "react";
import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {MyContext} from "../../context/AppContext";
import {SideBarRight} from "../../components/SideBarRight/SideBarRight";
import {Button} from "@radix-ui/themes";
import swords from "../../assets/swords.svg";
import {Link} from "react-router-dom";

export const Dashboard = () => {
    const {isSideBarActive} = useContext(MyContext);

    return (
        <div>
            <LoggedHeader />
            <div className="container flex flex-col lg:flex-row mx-auto">
                <SideBarLeft />
                <div
                    className={`px-4 transition-all duration-500 w-[100%] lg:w-[800px] ${
                        isSideBarActive ? "mx-auto" : ""
                    }`}
                >
                    <div className="px-4 rounded-lg dark:border-gray-700">
                        <div className="my-12 w-full">
                            <h2 className="text-3xl font-bold text-red-700">
                                Home
                            </h2>
                            <p className="text-gray-600">
                                See what's new and what's coming
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-red-700">
                                Your Hub for Competitively Learning English!
                            </h3>
                            <p className="text-gray-700 my-6">
                                At EngRivals, you don't just learn English; you
                                master it competitively. Our platform offers you
                                a unique experience designed for those aiming to
                                excel in their English proficiency and stand out
                                in any competitive environment.
                            </p>
                            <Link to="/groupchallenges">
                                <Button size="4" className="bg-red-500">
                                    <img src={swords} alt="sword" />
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
                                    Take on daily learning challenges that will
                                    test your skills in grammar, vocabulary, and
                                    comprehension. Earn points and improve your
                                    position on our global leaderboard.
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Live Competitions:
                                    </span>{" "}
                                    Participate in real-time competitions with
                                    students from around the world. Test your
                                    knowledge in simulated competitive
                                    environments for a one-of-a-kind learning
                                    experience.
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Interactive Courses:
                                    </span>{" "}
                                    Our courses are crafted to keep you engaged
                                    and motivated. You'll learn not just
                                    effectively but also excitingly.
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
                                    Connect with other serious learners and
                                    expert teachers. Together, we make EngRivals
                                    an exceptional place to learn.
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Your Position on the Leaderboard:
                                    </span>{" "}
                                    Conquer the top of the leaderboard. Your
                                    achievements inspire others and serve as
                                    proof of your language mastery!
                                </li>
                                <li>
                                    <span className="font-bold text-gray-700">
                                        Unlocked Achievements:
                                    </span>{" "}
                                    Celebrate your milestones and unlock
                                    achievements as you progress. Each step is
                                    an accomplishment bringing you closer to
                                    mastery.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SideBarRight />
            </div>
        </div>
    );
};
