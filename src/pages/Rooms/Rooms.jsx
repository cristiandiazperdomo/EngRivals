import {CompletePhrase} from "../../components/Challenges/CompletePhrase";
import {Translate} from "../../components/Challenges/Translate";
import {UserStatusDropdown} from "../../components/UserStatusDropdown/UserStatusDropdown";
import {RoomHeader} from "../../components/RoomHeader/RoomHeader";
import {RoomFooter} from "../../components/RoomFooter/RoomFooter";
import {useContext, useEffect, useRef, useState} from "react";
import {
    getAnswer,
    getChallenge,
    getChallengeSuccess,
    savePlayersInfoSuccess,
    saveUserAnswer,
    sendAEmoji,
} from "../../redux/actions/challengeActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {OpenQuestion} from "../../components/Challenges/OpenQuestion";
import {MyContext} from "../../context/AppContext";

import mistake from "../../assets/germanio_trumpet-e4.wav";
import right from "../../assets/powerupsuccess.wav";

import suspense from "../../assets/orchestra-end-game.mp3";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {getUserInfo} from "../../redux/actions/userActions";

export const Rooms = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [hideQuestions, setHideQuestions] = useState(true);
    const [client, setClient] = useState(null);
    // const [iconNumber, setIconNumber] = useState(0);

    const optionsList = useRef();
    const userPhraseRef = useRef();

    const {userInfo} = useSelector((state) => state.userReducer);
    const {challenge} = useSelector((state) => state.challengeReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();

    const areThereMoreQuestions = (questions = challenge?.questions) => {
        let indexesOfNotAnsweredsQuestions = [];

        questions.forEach((question, index) => {
            if (question.answers === null || question.answers.length === 0) {
                indexesOfNotAnsweredsQuestions.push(index);
            } else if (
                !question.answers.some(
                    (answer) => answer.userId === userInfo.id
                )
            ) {
                indexesOfNotAnsweredsQuestions.push(index);
            }
        });

        if (indexesOfNotAnsweredsQuestions.length === 0)
            return {areThere: false, indexesOfNotAnsweredsQuestions};

        return {
            areThere: true,
            indexesOfNotAnsweredsQuestions,
        };
    };

    const createRandomNumber = (max, min) =>
        Math.floor(Math.random() * (max - min) + min);

    const handleGetNextQuestion = () => {
        setShowResult(false);
        const {areThere, indexesOfNotAnsweredsQuestions} =
            areThereMoreQuestions();

        if (!areThere) {
            const audio = new Audio(suspense);
            audio.preload = "auto";
            audio.volume = 0.9;
            audio.play();
            navigate("/completed/" + id);
        }

        let getRandomNumber = 0;

        do {
            getRandomNumber = createRandomNumber(
                indexesOfNotAnsweredsQuestions.length,
                0
            );
        } while (
            challenge.questions[indexesOfNotAnsweredsQuestions[getRandomNumber]]
                .id === currentQuestion.id
        );

        setCurrentQuestion(
            challenge.questions[indexesOfNotAnsweredsQuestions[getRandomNumber]]
        );
    };

    const handleSkipToNextQuestion = () => {
        const {areThere, indexesOfNotAnsweredsQuestions} =
            areThereMoreQuestions();

        if (!areThere) return;
        if (indexesOfNotAnsweredsQuestions.length <= 1) return;

        const numberOfFreeIndexes = indexesOfNotAnsweredsQuestions.length;

        let getRandomNumber = 0;

        do {
            getRandomNumber = createRandomNumber(numberOfFreeIndexes, 0);
        } while (
            challenge.questions[indexesOfNotAnsweredsQuestions[getRandomNumber]]
                .id === currentQuestion.id
        );

        setCurrentQuestion(
            challenge.questions[indexesOfNotAnsweredsQuestions[getRandomNumber]]
        );
    };

    const isThereAnOptionSelected = () => {
        const lis = optionsList.current.childNodes;

        let optionId = undefined;

        for (let i = 0; i < lis.length; i++) {
            if (lis[i].childNodes[0].checked) {
                optionId = lis[i].getAttribute("id");
            }
        }

        const isThere = optionId === undefined ? false : true;

        return {
            isThere,
            optionId,
        };
    };

    const handleGetTranslationAnswer = () => {
        const {isThere, optionId} = isThereAnOptionSelected();

        if (!isThere || challenge === null) return null;

        const questionWithAnswer = structuredClone(currentQuestion);

        const option = questionWithAnswer?.options?.find(
            (option) => option.id === optionId
        );

        questionWithAnswer.answers = [
            {
                answer: option?.name,
                userId: userInfo.id,
            },
        ];

        return questionWithAnswer;
    };

    const handleWritingQuestion = () => {
        let completeAnswer = "";

        if (userPhraseRef.current?.childNodes?.length === 0) return null;

        userPhraseRef.current
            .querySelectorAll("span")
            .forEach((word) => (completeAnswer += " " + word.textContent));

        const questionWithAnswer = structuredClone(currentQuestion);

        if (completeAnswer.slice(1, completeAnswer.length) === "") return null;

        questionWithAnswer.answers = [
            {
                answer: completeAnswer.slice(1, completeAnswer.length),
                userId: userInfo?.id,
            },
        ];

        return questionWithAnswer;
    };

    const handleGetOpenQuestionAnswer = () => {
        const {isThere, optionId} = isThereAnOptionSelected();

        if (!isThere || challenge === null) return null;

        const questionWithAnswer = structuredClone(currentQuestion);

        const option = questionWithAnswer?.options?.find(
            (option) => option.id === optionId
        );

        if (option?.name?.length === 0 || option?.name === undefined)
            return null;

        questionWithAnswer.answers = [
            {
                answer: option?.name,
                userId: userInfo?.id,
            },
        ];

        return questionWithAnswer;
    };

    const handleSaveAnswer = () => {
        let questionWithAnswer = null;

        if (currentQuestion?.typeOfExercise === "translation") {
            questionWithAnswer = handleGetTranslationAnswer();
        } else if (currentQuestion.typeOfExercise === "open question") {
            questionWithAnswer = handleGetOpenQuestionAnswer();
        } else if (currentQuestion.typeOfExercise === "writing") {
            questionWithAnswer = handleWritingQuestion();
        }

        if (questionWithAnswer === null || questionWithAnswer === undefined)
            return;

        dispatch(saveUserAnswer(questionWithAnswer, id, client));
    };

    const handleSendEmoji = (number) => {
        //dispatch(sendAEmoji(client, id, number));
    };

    useEffect(() => {
        window.speechSynthesis.cancel();
    }, [currentQuestion]);

    useEffect(() => {
        if (challenge === null) {
            dispatch(getChallenge(id));
        }
    }, []);

    useEffect(() => {
        if (userInfo === null) dispatch(getUserInfo());
    }, []);

    useEffect(() => {
        if (client !== null) return;
        if (userInfo === null) return;
        const socket = new SockJS("http://localhost:8080/ws");
        const stompClientInstance = Stomp.over(socket);
        stompClientInstance.debug = () => {};
        stompClientInstance.connect(
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            (frame) => {
                stompClientInstance.subscribe(
                    "/rooms/game/" + userInfo?.id + "/" + id,
                    (message) => {
                        const responseBody = JSON.parse(message.body);
                        if (responseBody.status) {
                            alert(responseBody.status);
                        } else if (responseBody.answers === null) {
                            dispatch(
                                savePlayersInfoSuccess(responseBody.players)
                            );
                        } else {
                            dispatch(
                                getAnswer(
                                    responseBody,
                                    setCurrentQuestion,
                                    userInfo
                                )
                            );
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
                // Manejar el error de conexión aquí
            }
        );
    }, [userInfo]);

    useEffect(() => {
        /*if (client !== null) return;
        if (userInfo === null) return;
        const socket = new SockJS("http://localhost:8080/ws");
        const stompClientInstance = Stomp.over(socket);
        stompClientInstance.connect(
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            (frame) => {
                stompClientInstance.subscribe(
                    "/rooms/emojis/" + userInfo?.id,
                    (message) => {
                        const responseBody = JSON.parse(message.body);
                        if (responseBody.status) {
                            alert(responseBody.status);
                        } else {
                            setIconNumber(responseBody);
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
                // Manejar el error de conexión aquí
            }
        );*/
    }, [userInfo]);

    useEffect(() => {
        if (challenge !== null && !(challenge instanceof Promise)) {
            const {areThere, indexesOfNotAnsweredsQuestions} =
                areThereMoreQuestions();

            if (currentQuestion === null) {
                if (!areThere) {
                    navigate("/completed/" + id);
                    const audio = new Audio(suspense);
                    audio.preload = "auto";
                    audio.volume = 0.9;
                    audio.play();
                    return;
                }

                const getRandomNumber = createRandomNumber(
                    indexesOfNotAnsweredsQuestions.length,
                    0
                );
                setCurrentQuestion(
                    challenge.questions[
                        indexesOfNotAnsweredsQuestions[getRandomNumber]
                    ]
                );
            }
        }
    }, [challenge]);

    useEffect(() => {
        if (
            challenge !== null &&
            !(challenge instanceof Promise) &&
            currentQuestion !== null
        ) {
            if (
                currentQuestion?.answers?.some(
                    (answer) => answer.userId === userInfo?.id
                )
            ) {
                setShowResult(true);
            }
        }
    }, [currentQuestion]);

    const handleEditDeleteQuestion = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/questionsN",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentQuestion),
                }
            );

            const data = await response.json();

            alert(data.status);
            setShowDelete(false);
        } catch (error) {}
    };

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setHideQuestions(false);
        }, 1500);

        return () => {
            clearTimeout(idTimeout);
        };
    }, []);

    useEffect(() => {
        if (
            !currentQuestion?.answers?.find(
                (answer) => answer.userId === userInfo?.id
            )
        )
            return;
        let audio = new Audio(mistake);
        audio.volume = 0.6;
        if (
            currentQuestion?.answers?.find(
                (answer) => answer.userId === userInfo?.id
            )?.isCorrect
        ) {
            audio = new Audio(right);
            audio.volume = 0.9;
        }
        audio.preload = "auto";
        audio.play();
    }, [showResult]);

    return (
        <div className="relative flex flex-col justify-between h-screen">
            <div
                className={`${
                    hideQuestions
                        ? "absolute top-0 bottom-0 left-0 right-0 bg-white h-screen w-full z-20"
                        : "hidden"
                }`}
            ></div>
            <div className="hidden for now absolute right-0 top-40">
                <UserStatusDropdown />
            </div>
            <div className="hidden sm:flex">
                <RoomHeader
                    points={
                        challenge?.players?.find(
                            (player) => player.userId === userInfo?.id
                        )?.points
                    }
                />
            </div>
            {/* <Emojis handleSendEmoji={handleSendEmoji} />
            <ShowEmojis iconNumber={iconNumber} setIconNumber={setIconNumber} /> */}
            <div className="sm:mx-auto w-full sm:w-[540px]">
                <div className="flex flex-col justify-between items-center px-4 sm:mx-0">
                    {["translation", "multiple choice"].includes(
                        currentQuestion?.typeOfExercise
                    ) && (
                        <Translate
                            currentQuestion={currentQuestion}
                            title={currentQuestion?.title}
                            options={currentQuestion?.options}
                            optionsList={optionsList}
                            useCard={true}
                        />
                    )}
                    {currentQuestion?.typeOfExercise === "writing" && (
                        <CompletePhrase
                            title={currentQuestion?.title}
                            phrase={currentQuestion?.options[0]?.name}
                            userPhraseRef={userPhraseRef}
                        />
                    )}
                    {currentQuestion?.typeOfExercise === "open question" && (
                        <OpenQuestion
                            currentQuestion={currentQuestion}
                            optionsList={optionsList}
                            useCard={false}
                        />
                    )}
                </div>
            </div>
            <RoomFooter
                currentQuestion={currentQuestion}
                answer={currentQuestion?.answers?.find(
                    (answer) => answer.userId === userInfo?.id
                )}
                showResult={showResult}
                submit={handleSaveAnswer}
                next={handleGetNextQuestion}
                skip={handleSkipToNextQuestion}
            />
        </div>
    );
};
