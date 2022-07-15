import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth_reducer";

let reducers =  combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store=store;
export default store;