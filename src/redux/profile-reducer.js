import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postData: [
        {id: 1, post: "Качeство как клифхэнгер", likes: 2},
        {id: 2, post: "Музло приносит деньги", likes: 4},
        {id: 3, post: "Причем так много", likes: 8},
        {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
        {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
    ],
    newPostText: "",
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (id) => (dispatch) =>{
    profileAPI.getProfile(id).then(data => dispatch(setUserProfile(data)));
}
export const getUserStatus = (id) => (dispatch) =>{
    profileAPI.getStatus(id).then(response => dispatch(setUserStatus(response.data)));
}

export const updateUserStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(response =>{
        if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
    })
}



export default profileReducer;