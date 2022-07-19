import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth_reducer";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app_reducer";

let reducers =  combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form : formReducer,
    app : appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store=store;
export default store;