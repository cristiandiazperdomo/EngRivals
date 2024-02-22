const initialState = [];

export const lobbiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOBBIES":
            return action.payload;
        default:
            return state;
    }
};
