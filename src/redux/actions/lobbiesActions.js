export const getLobbies = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8080/v1/api/challenges");
        const data = await response.json();

        dispatch(getLobbiesSuccess(data));
    };
};

const getLobbiesSuccess = (data) => ({type: "GET_LOBBIES", payload: data});
