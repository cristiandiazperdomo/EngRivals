export const createChallenge = (navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges/4/6"
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
            console.log("setShowResult");
        } catch (error) {
            console.log(error);
        }
    };
};
