import {CompletePhrase} from "../../components/Challenges/CompletePhrase";
import {Translate} from "../../components/Challenges/Translate";
import {UserStatusDropdown} from "../../components/UserStatusDropdown/UserStatusDropdown";
import {RoomHeader} from "../../components/RoomHeader/RoomHeader";
import {RoomFooter} from "../../components/RoomFooter/RoomFooter";
import {useContext, useEffect, useRef, useState} from "react";
import {
    getChallenge,
    getChallengeSuccess,
    saveUserAnswer,
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
            console.log("acá", areThere);
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

        if (questionWithAnswer === null) return;

        dispatch(saveUserAnswer(questionWithAnswer, id, client));
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
        stompClientInstance.connect(
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            (frame) => {
                stompClientInstance.subscribe(
                    "/rooms/game/" + userInfo?.id,
                    (message) => {
                        const challenge = JSON.parse(message.body);
                        if (challenge.status) {
                            alert(challenge.status);
                        } else {
                            dispatch(
                                getChallengeSuccess(challenge, setShowResult)
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

    useEffect(() => {
        if (challenge !== null && !(challenge instanceof Promise)) {
            const {areThere, indexesOfNotAnsweredsQuestions} =
                areThereMoreQuestions();

            if (currentQuestion === null) {
                if (!areThere) {
                    console.log("acá", areThere);
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
            const currentQuestionCorrect = challenge.questions.find(
                (question) => question.id === currentQuestion.id
            );

            if (
                currentQuestionCorrect.answers.some(
                    (answer) => answer.userId === userInfo?.id
                )
            ) {
                setShowResult(true);
            }
            setCurrentQuestion(currentQuestionCorrect);
        }
    }, [challenge]);

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

    return (
        <div className="relative flex flex-col justify-between h-screen">
            <div
                className={`${
                    hideQuestions
                        ? "absolute top-0 bottom-0 left-0 right-0 bg-white h-screen w-full z-20"
                        : "hidden"
                }`}
            ></div>
            <div className="hidden for now absolute right-0 top-[20%]">
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
            {/* {showDelete && (
                <div
                    className="p-12 bg-red-100 mx-auto w-100"
                    style={{zIndex: 2000}}
                >
                    <button
                        className="bg-black text-white p-2 rounded-xl"
                        onClick={handleEditDeleteQuestion}
                    >
                        ELIMINAR PREGUNTA
                    </button>
                </div>
            )}
            <button
                className="bg-red-600 text-white p-2 rounded-xl w-100 mx-auto cursor-pointer absolute right-20 top-20"
                style={{zIndex: 1000}}
                onClick={() => setShowDelete(!showDelete)}
            >
                ABRIR ELIMINAR
            </button> */}
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
