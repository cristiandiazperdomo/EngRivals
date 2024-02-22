import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {challengeReducer} from "./challengeReducer";
import {lobbiesReducer} from "./lobbiesReducer";

const rootReducers = combineReducers({
    userReducer,
    challengeReducer,
    lobbiesReducer,
});

export default rootReducers;
