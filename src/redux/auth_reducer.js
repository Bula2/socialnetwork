import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return (state);
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId,email,login, isAuth} })

export const loginUser = () => (dispatch) =>{
    return authAPI.loginUser().then(data => {
        if (data.resultCode === 0){
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const loginMe = (email, password, rememberMe) => (dispatch) =>{
    authAPI.loginMe(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0){
            dispatch(loginUser());
        }
        else {
            let errMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка сервера"
            dispatch(stopSubmit("login", {_error: errMessage}));
        }
    });
}

export const logoutMe = () => (dispatch) =>{
    authAPI.logoutMe().then(response => {
        if (response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null,null, false));
        }
    });
}

export default authReducer;