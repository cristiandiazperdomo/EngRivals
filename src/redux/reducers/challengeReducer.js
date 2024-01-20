const initialState = {
    time: 123,
    challenge: {},
};

export const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHALLENGE":
            const challenge = action.payload;

            return {
                ...state,
                challenge,
            };
        default:
            return state;
    }
};
