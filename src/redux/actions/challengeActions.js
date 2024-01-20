export const getChallenge = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges/1/1"
            );

            dispatch(getChallengeSuccess(await response.json()));
        } catch (error) {
            console.log(error);
        }
    };
};

const getChallengeSuccess = (data) => ({type: "GET_CHALLENGE", payload: data});
