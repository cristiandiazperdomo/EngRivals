export const createAccount = (requestBody, navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:8080/v1/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            dispatch(getUserInfoSuccess(await response.json()));

            navigate("/englishlevel");
        } catch (error) {
            console.log(error);
        }
    };
};

export const setUserEnglishLevel = (requestBody, navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:8080/v1/api/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            dispatch(getUserInfoSuccess(await response.json()));

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
};

const getUserInfoSuccess = (data) => ({type: "GET_USER_INFO", payload: data});
