import {Badge, Button} from "@radix-ui/themes";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getChallenge,
    getChallengeSuccess,
} from "../../redux/actions/challengeActions";

import * as Tooltip from "@radix-ui/react-tooltip";

import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {CompletedTestTimer} from "../../components/CompletedTestTimer/CompletedTestTimer";
import testCompletedSocialMedia from "../../assets/test-completed-social-media.svg";
import noCorrectAnswer from "../../assets/no-correct-answers.svg";
import {ProfilePicture} from "../../components/ProfilePicture/ProfilePicture";
import {getUserInfo} from "../../redux/actions/userActions";

export const TestCompleted = () => {
    const [wellAnsweredQuestions, setWellAnsweredQuestions] =
        useState(undefined);
    const [wellUsedWords, setWellUsedWords] = useState([]);
    const [client, setClient] = useState(null);
    const [noAnswers, setNoAnswers] = useState(false);

    const {id} = useParams();
    const {userInfo} = useSelector((state) => state.userReducer);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {challenge} = useSelector((state) => state.challengeReducer);

    const foundWellUsedWords = () => {
        if (wellUsedWords.length === 6) return;

        const wellUsed = [];

        let hasNoAnswer = true;
        let minimumAmountOfWords = 0;

        challenge.questions.forEach((question) => {
            question?.answers?.forEach((answer) => {
                if (answer.userId === userInfo?.id) {
                    hasNoAnswer = false;
                    if (answer.isCorrect) {
                        if (minimumAmountOfWords === 6) return;

                        let words = [];
                        question.title.split(" ").forEach((word) => {
                            word?.replaceAll("?", "")
                                ?.replaceAll(",", "")
                                ?.replaceAll(".", "")
                                ?.replaceAll("…", "")
                                ?.replaceAll("!", "");

                            const isNotItUseful =
                                word === undefined ||
                                word?.length === 0 ||
                                word === "..." ||
                                word === "…" ||
                                word === "_" ||
                                word === "." ||
                                word === "/" ||
                                word === "A:" ||
                                word === "B:" ||
                                word === "?" ||
                                words.some((w) => w === words);

                            if (!isNotItUseful) {
                                words.push(word);
                                minimumAmountOfWords++;
                            }
                        });
                    }
                }
            });
        });

        minimumAmountOfWords =
            minimumAmountOfWords > 6 ? 6 : minimumAmountOfWords;

        if (hasNoAnswer) {
            setNoAnswers(true);
            return;
        }

        let i = 0;
        do {
            const question = challenge.questions[i];

            if (question === undefined) return;

            const wellAnswered = question?.answers?.find(
                (answer) => answer.userId === userInfo?.id
            );

            if (wellAnswered?.isCorrect === true) {
                const randomNumber = Math.floor(
                    Math.random() * (question.title.split(" ").length - 0 + 1) +
                        0
                );

                const selectedWord = question.title
                    .split(" ")
                    [randomNumber]?.replaceAll("?", "")
                    ?.replaceAll(",", "")
                    ?.replaceAll(".", "")
                    ?.replaceAll("…", "");

                const isNotItUseful =
                    selectedWord === undefined ||
                    selectedWord?.length === 0 ||
                    selectedWord === "..." ||
                    selectedWord === "…" ||
                    selectedWord === "_" ||
                    selectedWord === "." ||
                    selectedWord === "/" ||
                    selectedWord === "A:" ||
                    selectedWord === "B:" ||
                    selectedWord === "?" ||
                    wellUsed.some((word) => word === selectedWord);

                if (isNotItUseful) continue;

                if (wellUsed?.length < 6) {
                    wellUsed.push(selectedWord);
                }
            }
            i++;
            if (challenge.questions.length === i + 1) i = 0;
        } while (wellUsed.length < minimumAmountOfWords);

        setWellUsedWords(wellUsed);
    };

    const getWellAnsweredQuestions = () => {
        if (challenge === null) return;
        const mainUserInfo = challenge.players.find(
            (player) => player.userId == userInfo?.id
        );
        const opponent = challenge.players.find(
            (player) => player.userId !== userInfo?.id
        );

        const usersWellAnsweredQuestions = {
            mainUser: mainUserInfo.points === 0 ? 0 : mainUserInfo.points / 2,
            opponent: opponent.points === 0 ? 0 : opponent.points / 2,
        };

        setWellAnsweredQuestions(usersWellAnsweredQuestions);
    };

    const handleBackToGroupChallenges = () => {
        dispatch(getChallengeSuccess(null));
        navigate("/grouplessons");
    };

    const handleGetSeconds = () => {
        const currentTime = new Date();
        let creationTime = new Date(challenge?.creationTime);

        creationTime.setMinutes(creationTime.getMinutes() + 2);

        const totalSeconds = Math.floor(
            (creationTime.getTime() - currentTime.getTime()) / 1000
        );

        if (totalSeconds <= -5) {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            };
            const END_GAME = "/challenges/end-game/" + id;
            client.send(END_GAME, headers);
        }
    };

    useEffect(() => {
        if (
            challenge !== null &&
            challenge.players.find((player) => player.userId === userInfo.id)
                .finishTime === null
        ) {
            navigate("/rooms/" + id);
        }
    }, [challenge]);

    useEffect(() => {
        if (userInfo === null) dispatch(getUserInfo(navigate));
    }, []);

    useEffect(() => {
        if (challenge === null) {
            dispatch(getChallenge(id));
        }
    }, []);

    useEffect(() => {
        const idTimeout = setInterval(() => {
            if (
                challenge !== null &&
                challenge.players.some((player) => player.finishTime === null)
            ) {
                handleGetSeconds();
            }

            if (
                challenge !== null &&
                challenge.players.every((player) => player.finishTime !== null)
            )
                clearInterval(idTimeout);
        }, 1000);

        return () => {
            clearInterval(idTimeout);
        };
    }, [challenge]);

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
                    "/rooms/results/" + id,
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
                stompClientInstance.disconnect();
            },
            (error) => {
                console.error("Error al conectar:", error);
                // Manejar el error de conexión aquí
            }
        );
    }, [userInfo]);

    useEffect(() => {
        if (challenge !== null && !(challenge instanceof Promise)) {
            getWellAnsweredQuestions();
            foundWellUsedWords();
        }
    }, [challenge, id]);

    return (
        <div className="w-full flex min-h-screen items-center justify-center">
            <div className="w-full sm:w-[520px] bg-white bg-opacity-50 rounded-xl">
                <div className="flex justify-center mx-4 my-8">
                    <div className="w-full flex flex-col justify-center">
                        {challenge?.players?.find(
                            (player) => player.userId === userInfo?.id
                        )?.finishTime !== null &&
                            challenge?.players?.find(
                                (player) => player.userId !== userInfo?.id
                            )?.finishTime && (
                                <>
                                    {wellAnsweredQuestions?.mainUser >
                                    wellAnsweredQuestions?.opponent ? (
                                        <div className="p-1 bg-green-100 rounded-md flex items-center w-[100px] space-x-1 animate-pulsing justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-mood-xd w-6 h-6 text-green-800 z-10"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
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
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                <path d="M9 14h6a3 3 0 0 1 -6 0z" />
                                                <path d="M9 8l6 3" />
                                                <path d="M9 11l6 -3" />
                                            </svg>
                                            <span className="text-green-900 flex flex-row font-medium">
                                                You win
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="p-1 bg-red-100 rounded-md flex items-center w-[120px] space-x-1 justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-mood-wink w-6 h-6 text-red-800 z-10"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
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
                                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                <path d="M15 10h.01" />
                                                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                                                <path d="M8.5 8.5l1.5 1.5l-1.5 1.5" />
                                            </svg>
                                            <span className="text-red-900 flex flex-row font-medium">
                                                Next time
                                            </span>
                                        </div>
                                    )}
                                </>
                            )}
                        <h2 className="text-2xl font-bold my-4 text-center">
                            {challenge?.title}
                        </h2>
                        <div className="grid grid-cols-2 mb-2 justify-left">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center space-y-2">
                                    <ProfilePicture name={userInfo?.name} />
                                    <div className="flex">
                                        <CompletedTestTimer
                                            creationTime={
                                                challenge?.creationTime
                                            }
                                            finishTime={
                                                challenge?.players?.find(
                                                    (player) =>
                                                        player.userId ===
                                                        userInfo?.id
                                                )?.finishTime
                                            }
                                        />
                                        <div className="flex text-xs text-slate-900 bg-blue-100 rounded-r-xl -mt-2 p-1 font-bold">
                                            {wellAnsweredQuestions?.mainUser}{" "}
                                            correct
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <ProfilePicture
                                    name={
                                        challenge?.players?.find(
                                            (player) =>
                                                player.userId !== userInfo?.id
                                        )?.name
                                    }
                                />
                                <div className="flex">
                                    <CompletedTestTimer
                                        creationTime={challenge?.creationTime}
                                        finishTime={
                                            challenge?.players?.find(
                                                (player) =>
                                                    player.userId !==
                                                    userInfo?.id
                                            )?.finishTime
                                        }
                                    />
                                    <div className="flex text-xs text-slate-900 bg-blue-100 rounded-r-xl -mt-2 p-1 font-bold">
                                        {wellAnsweredQuestions?.opponent}{" "}
                                        correct
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-green-600">
                            <div className="space-x-3 flex items-center font-bold text-lg">
                                <Badge
                                    size="2"
                                    color="green"
                                    className="text-md"
                                >
                                    + {wellUsedWords.length}
                                </Badge>
                                <span className="text-md text-black">
                                    Well used words
                                </span>
                            </div>
                        </div>
                        <div>
                            {noAnswers === true ? (
                                <div className="w-full h-[350px] flex flex-col justify-center items-center">
                                    <img
                                        src={testCompletedSocialMedia}
                                        alt="social-media-total-distracted"
                                        className="w-[200px] h-[200px]"
                                    />
                                    <span className="font-bold">
                                        You didn't answer any question
                                    </span>
                                </div>
                            ) : (
                                <ul className="my-4 space-y-2 w-full h-[350px]">
                                    {wellUsedWords.length === 0 ? (
                                        <div className="w-full h-full flex flex-col justify-center items-center">
                                            <img
                                                src={noCorrectAnswer}
                                                alt="social-media-total-distracted"
                                                className="w-[200px] h-[200px]"
                                            />
                                            <span className="font-bold">
                                                You didn't answer any questions
                                                correctly.
                                            </span>
                                        </div>
                                    ) : (
                                        wellUsedWords?.map((word, index) => (
                                            <li
                                                className="flex justify-between w-full border rounded-xl p-1.5"
                                                key={index}
                                            >
                                                <div className="flex text-lg justify-between w-full">
                                                    <div className="flex">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-circle-check-filled text-green-500 w-8 mr-4"
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
                                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                                strokeWidth="0"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {word}
                                                    </div>
                                                    <Tooltip.Provider>
                                                        <Tooltip.Root>
                                                            <Tooltip.Trigger
                                                                asChild
                                                            >
                                                                <Link
                                                                    to={
                                                                        "https://dictionary.cambridge.org/es/diccionario/ingles-espanol/" +
                                                                        word
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="icon icon-tabler icon-tabler-external-link transition-all duration-150 text-gray-300 hover:text-gray-600 cursor-pointer"
                                                                        width="24"
                                                                        height="24"
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
                                                                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                                        <path d="M11 13l9 -9" />
                                                                        <path d="M15 4h5v5" />
                                                                    </svg>
                                                                </Link>
                                                            </Tooltip.Trigger>
                                                            <Tooltip.Portal>
                                                                <Tooltip.Content
                                                                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                                    sideOffset={
                                                                        5
                                                                    }
                                                                >
                                                                    <span className="text-xs text-gray-500">
                                                                        See more
                                                                        info in{" "}
                                                                    </span>
                                                                    <span className="font-bold text-xs text-gray-600">
                                                                        Cambridge
                                                                        Dictionary
                                                                    </span>
                                                                    <Tooltip.Arrow className="fill-white" />
                                                                </Tooltip.Content>
                                                            </Tooltip.Portal>
                                                        </Tooltip.Root>
                                                    </Tooltip.Provider>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            )}
                        </div>
                        <div className="text-yellow-500 text-2xl justify-center flex space-x-2 font-bold">
                            <p>+</p>
                            <p>
                                {wellAnsweredQuestions?.mainUser !==
                                    undefined &&
                                    wellAnsweredQuestions?.mainUser * 2}
                            </p>
                            <p>XP</p>
                        </div>
                        <div onClick={handleBackToGroupChallenges}>
                            <Button
                                color="green"
                                className="w-full mb-3"
                                size="4"
                            >
                                Finish
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 w-full">
                            {[
                                {
                                    score: wellAnsweredQuestions?.mainUser,
                                    criterion: "Answered Correctly",
                                },
                                {
                                    score: Math.floor(
                                        (wellAnsweredQuestions?.mainUser *
                                            100) /
                                            challenge?.questions?.length
                                    ),
                                    criterion: "Accuracy",
                                },
                            ].map((criteria) => (
                                <div
                                    className="bg-gray-50 rounded-b-xl p-4 text-center border-b-2 first:rounded-t-xl first:rounded-b-none last:mt-4"
                                    key={criteria?.score}
                                >
                                    <p className="text-green-700 text-2xl font-bold">
                                        {criteria.score}
                                        {criteria.criterion === "Accuracy"
                                            ? "%"
                                            : ""}
                                    </p>
                                    <p className="text-gray-900 font-bold">
                                        {criteria.criterion}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
