export const createAccount = (requestBody, navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const {token} = await response.json();

            localStorage.setItem("eng_token", token);

            const userResponse = await fetch(
                "http://localhost:8080/v1/api/users",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            const data = await userResponse.json();

            dispatch(getUserInfoSuccess(data));

            navigate("/englishlevel");
        } catch (error) {
            console.log(error);
        }
    };
};

export const login = (requestBody, navigate, setError) => {
    return async (dispatch) => {
        try {
            setError(false);
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const {token} = await response.json();

            localStorage.setItem("eng_token", token);

            const userResponse = await fetch(
                "http://localhost:8080/v1/api/users",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            dispatch(getUserInfoSuccess(await userResponse.json()));
            navigate("/dashboard");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
};

export const logout = (navigate) => {
    return async (dispatch) => {
        localStorage.removeItem("eng_token");
        dispatch(getUserInfoSuccess(null));
        navigate("/");
    };
};

export const getUserInfo = (navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:8080/v1/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + localStorage.getItem("eng_token"),
                },
            });

            const data = await response.json();

            dispatch(getUserInfoSuccess(data));
        } catch (error) {
            navigate("/signin");
            console.log(error);
        }
    };
};

export const setUserEnglishLevel = (requestBody, navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/set-english-level",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            dispatch(getUserInfoSuccess(await response.json()));
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };
};

const getUserInfoSuccess = (data) => ({type: "GET_USER_INFO", payload: data});

export const refreshToken = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/api/jwt/refresh",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );
            const {token} = await response.json();

            localStorage.removeItem("eng_token");
            localStorage.setItem("eng_token", token);
        } catch (error) {
            console.log(error);
        }
    };
};