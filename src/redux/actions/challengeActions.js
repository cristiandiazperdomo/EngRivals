export const createChallenge = (navigate, categoryId) => {
    return async (dispatch) => {
        try {
            const isTheBrowserCompatibleWithAudio =
                window.navigator.userAgentData.brands.some(
                    (brand) => brand.brand === "Brave"
                )
                    ? false
                    : true;

            const response = await fetch(
                `http://localhost:8080/v1/api/challenges/${categoryId}/1`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        isTheBrowserCompatibleWithAudio,
                    }),
                }
            );

            const data = await response.json();

            dispatch(getChallengeSuccess(data));
            navigate("/rooms/" + data.id);
        } catch (error) {
            console.log(error);
        }
    };
};

export const getChallenge = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges/" + id
            );

            dispatch(getChallengeSuccess(await response.json()));
        } catch (error) {
            console.log(error);
        }
    };
};

const getChallengeSuccess = (data) => ({type: "GET_CHALLENGE", payload: data});

export const saveUserAnswer = (
    questionWithAnswer,
    challengeId,
    setShowResult
) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges/" + challengeId,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(questionWithAnswer),
                }
            );

            dispatch(getChallengeSuccess(await response.json()));
            setShowResult(true);
        } catch (error) {
            console.log(error);
        }
    };
};
