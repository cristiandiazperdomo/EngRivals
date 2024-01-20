import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {challengeReducer} from "./challengeReducer";

const rootReducers = combineReducers({
    userReducer,
    challengeReducer,
});

export default rootReducers;
