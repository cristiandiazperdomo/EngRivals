import {CompletePhrase} from "../../components/Challenges/CompletePhrase";
import {Translate} from "../../components/Challenges/Translate";
import {UserStatusDropdown} from "../../components/UserStatusDropdown/UserStatusDropdown";
import {RoomHeader} from "../../components/RoomHeader/RoomHeader";
import {RoomFooter} from "../../components/RoomFooter/RoomFooter";
import {useEffect, useRef, useState} from "react";
import {
    getChallenge,
    saveUserAnswer,
} from "../../redux/actions/challengeActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

export const Rooms = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(undefined);
    const [showResult, setShowResult] = useState(false);

    const optionsList = useRef();

    const {userInfo} = useSelector((state) => state.userReducer);
    const {time, challenge} = useSelector((state) => state.challengeReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();

    const areThereMoreQuestions = (questions = challenge?.questions) => {
        let indexesOfNotAnsweredsQuestions = [];

        questions.forEach((question, index) => {
            if (question.answers === null || question.answers.length === 0) {
                indexesOfNotAnsweredsQuestions.push(index);
            } else if (
                question.answers.some((answer) => answer.userId === userInfo.id)
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
            navigate("/completed/" + id);
            return;
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

        setCurrentQuestionIndex(
            indexesOfNotAnsweredsQuestions[getRandomNumber]
        );
    };

    const handleSkipToNextQuestion = () => {
        const {areThere, indexesOfNotAnsweredsQuestions} =
            areThereMoreQuestions();

        if (!areThere) return;

        const numberOfFreeIndexes = indexesOfNotAnsweredsQuestions.length;

        let getRandomNumber = 0;

        do {
            getRandomNumber = createRandomNumber(numberOfFreeIndexes, 0);
        } while (
            challenge.questions[indexesOfNotAnsweredsQuestions[getRandomNumber]]
                .id === currentQuestion.id
        );

        setCurrentQuestion(challenge.questions[getRandomNumber]);
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

    const handleSaveAnswer = () => {
        const {isThere, optionId} = isThereAnOptionSelected();

        if (!isThere || challenge === null) return;

        const question = challenge?.questions?.find((question) =>
            question.options.some((option) => option.id === optionId)
        );

        const questionWithAnswer = structuredClone(question);

        const option = question?.options?.find(
            (option) => option.id === optionId
        );

        questionWithAnswer.answers = [
            {
                answer: option?.name,
                userId: 1,
            },
        ];

        dispatch(saveUserAnswer(questionWithAnswer, id, setShowResult));
    };

    useEffect(() => {
        if (challenge === null) {
            dispatch(getChallenge(id));
        }
    }, []);

    useEffect(() => {
        if (challenge !== null && !(challenge instanceof Promise)) {
            const {areThere, indexesOfNotAnsweredsQuestions} =
                areThereMoreQuestions();

            if (currentQuestion === null) {
                const getRandomNumber = createRandomNumber(
                    indexesOfNotAnsweredsQuestions.length,
                    0
                );
                setCurrentQuestion(
                    challenge.questions[
                        indexesOfNotAnsweredsQuestions[getRandomNumber]
                    ]
                );

                setCurrentQuestionIndex(
                    indexesOfNotAnsweredsQuestions[getRandomNumber]
                );
            }
        }
    }, [challenge]);

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="hidden for now">
                <UserStatusDropdown />
            </div>
            <div className="hidden sm:flex">
                <RoomHeader />
            </div>
            <div className="mx-auto max-w-[540px]">
                <div className="flex flex-col justify-between items-center mx-4 sm:mx-0">
                    {/*
                    <CompletePhrase />
                    <Translate
                        title={currentQuestion?.title}
                        options={currentQuestion?.options}
                        optionsList={optionsList}
                    />
    */}
                </div>
            </div>
            <RoomFooter
                isRight={
                    challenge?.questions[currentQuestionIndex]?.answers?.find(
                        (answer) => answer.userId === "1"
                    )?.isCorrect
                }
                showResult={showResult}
                submit={handleSaveAnswer}
                next={handleGetNextQuestion}
                skip={handleSkipToNextQuestion}
                time={time}
            />
        </div>
    );
};
