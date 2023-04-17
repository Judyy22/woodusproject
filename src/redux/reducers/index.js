import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import peopleReducer from "./peopleReducer";
import contributionReducer from "./contributionReducer";
import boardReducer from "./boardReducer";

export default combineReducers({
    course: courseReducer,
    people: peopleReducer,
    contribution: contributionReducer,
    board: boardReducer,
});
