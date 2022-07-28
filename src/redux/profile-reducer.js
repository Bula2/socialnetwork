import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const UPLOAD_PHOTO = "profile/UPLOAD_PHOTO";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

let initialState = {
    postData: [
        {id: 1, post: "Качeство как клифхэнгер", likes: 2},
        {id: 2, post: "Музло приносит деньги", likes: 4},
        {id: 3, post: "Причем так много", likes: 8},
        {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
        {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
    ],
    profile: null,
    status: "",
    isPhotoUpload: false
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: action.newPost,
                likes: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ""
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
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.id)
            }
        }

        case UPLOAD_PHOTO: {
            return {
                ...state,
                isPhotoUpload: action.isPhotoUpload
            }
        }

        case SAVE_PHOTO_SUCCESS:{
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const uploadPhoto = (isPhotoUpload) => ({type: UPLOAD_PHOTO, isPhotoUpload});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getProfile(id);
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setUserStatus(status));
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.data.photos));
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0)
        dispatch(getProfile(getState().auth.userId))
}


export default profileReducer;