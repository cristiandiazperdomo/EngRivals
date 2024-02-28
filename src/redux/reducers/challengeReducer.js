const initialState = {
    challenge: null,
};

export const challengeReducer = (state = initialState, action) => {
    let responseBody;
    switch (action.type) {
        case "GET_CHALLENGE":
            const challenge = action.payload;

            return {
                ...state,
                challenge,
            };

        case "SAVE_PLAYER_INFO":
            const updatedPlayers = structuredClone(state).challenge;

            updatedPlayers.players = action.payload;

            return {
                ...state,
                challenge: updatedPlayers,
            };
        case "GET_ANSWER":
            const updatedChallenge = structuredClone(state).challenge;
            const {responseBody, updateQuestion} = action.payload;

            const {setCurrentQuestion, userInfo} = updateQuestion;
            const {userId, questionId, players, answers} = responseBody;

            if (players !== null && players !== undefined) {
                updatedChallenge.players = players;
            }

            if (answers !== null && answers !== undefined) {
                const questionIndex = updatedChallenge.questions.findIndex(
                    (question) => question.id === questionId
                );

                updatedChallenge.questions[questionIndex].answers = answers;

                if (userId === userInfo?.id) {
                    setCurrentQuestion(
                        updatedChallenge.questions[questionIndex]
                    );
                }
            }

            return {
                ...state,
                challenge: updatedChallenge,
            };
        default:
            return state;
    }
};
