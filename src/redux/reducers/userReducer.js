const initialState = {
    isLogged: false,
    userInfo: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_INFO":
            const userInfo = {...state};

            userInfo.userInfo = action.payload;

            return userInfo;
        default:
            return state;
    }
};