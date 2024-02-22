import {refreshToken} from "../actions/userActions";

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
                    "/challenges/create-room/" + categoryId + "/1";
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

export const getAnswer = (challenge, setShowResult) => {
    return async (dispatch) => {
        dispatch(getChallengeSuccess(challenge));
        setShowResult(true);
    };
};

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
