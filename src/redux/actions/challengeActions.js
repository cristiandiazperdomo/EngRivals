import {refreshToken} from "../actions/userActions";

export const cancelCreateLobby = (client) => {
    return async (dispatch) => {
        try {
            const CREATE_CHALLENGE_URL = "/challenges/cancel-create-lobby";
            client.send(CREATE_CHALLENGE_URL, {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const createChallenge = (categoryId, client, userInfo, navigate) => {
    return async (dispatch) => {
        if (userInfo === null) return;
        if (userInfo.level_id_level !== 1) {
            navigate("/englishlevel");
            return;
        }
        try {
            const isTheBrowserCompatibleWithTextToSpeech =
                window.navigator.userAgentData.brands.some(
                    (brand) => brand.brand === "Brave"
                )
                    ? false
                    : true;

            if (!isNaN(categoryId)) {
                const socketPayload = {
                    isTheBrowserCompatibleWithTextToSpeech,
                };

                const CREATE_CHALLENGE_URL =
                    "/challenges/create-room/" +
                    categoryId +
                    "/" +
                    userInfo.level_id_level;
                client.send(
                    CREATE_CHALLENGE_URL,
                    {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                    JSON.stringify(socketPayload)
                );
            }
            dispatch(refreshToken());
        } catch (error) {
            console.log(error);
        }
    };
};

export const joinToChallenge = (
    challengeId,
    stompClient,
    userInfo,
    navigate
) => {
    return async (dispatch) => {
        if (userInfo === null) return;
        if (userInfo.level_id_level !== 1) {
            navigate("/englishlevel");
            return;
        }
        const isTheBrowserCompatibleWithTextToSpeech =
            window.navigator.userAgentData.brands.some(
                (brand) => brand.brand === "Brave"
            )
                ? false
                : true;

        const socketPayload = {
            isTheBrowserCompatibleWithTextToSpeech,
        };

        const CREATE_CHALLENGE_URL = "/challenges/join/" + challengeId;
        stompClient.send(
            CREATE_CHALLENGE_URL,
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            JSON.stringify(socketPayload)
        );
        dispatch(refreshToken());
    };
};

export const getChallenge = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges/" + id,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            dispatch(getChallengeSuccess(await response.json()));
        } catch (error) {
            console.log(error);
        }
    };
};

export const savePlayersInfoSuccess = (players) => ({
    type: "SAVE_PLAYER_INFO",
    payload: players,
});

export const getAnswer = (responseBody, setCurrentQuestion, userInfo) => {
    return async (dispatch) => {
        dispatch(
            getAnswerSuccess({
                responseBody,
                updateQuestion: {setCurrentQuestion, userInfo},
            })
        );
    };
};

const getAnswerSuccess = (data) => ({
    type: "GET_ANSWER",
    payload: data,
});

export const getChallengeSuccess = (data) => ({
    type: "GET_CHALLENGE",
    payload: data,
});

export const saveUserAnswer = (questionWithAnswer, challengeId, client) => {
    return async (dispatch) => {
        try {
            const CREATE_CHALLENGE_URL =
                "/challenges/save-user-answer/" + challengeId;
            client.send(
                CREATE_CHALLENGE_URL,
                {
                    Authorization:
                        "Bearer " + localStorage.getItem("eng_token"),
                },
                JSON.stringify(questionWithAnswer)
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const sendAEmoji = (client, challengeId, number) => {
    return async (dispatch) => {
        try {
            const CREATE_CHALLENGE_URL = `/challenges/send-emoji/${challengeId}/${number}`;
            client.send(CREATE_CHALLENGE_URL, {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            });
        } catch (error) {
            console.log(error);
        }
    };
};