import { combineReducers, createStore } from "redux";
import dialodsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    chat: dialodsReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;