import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import peopleReducer from "./peopleReducer";

export default combineReducers({
    course: courseReducer,
    people: peopleReducer,
});
