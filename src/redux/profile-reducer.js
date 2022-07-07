const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {id: 1, post: "Качeство как клифхэнгер", likes: 2},
        {id: 2, post: "Музло приносит деньги", likes: 4},
        {id: 3, post: "Причем так много", likes: 8},
        {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
        {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
    ],
    newPostText: ""
};
const profileReducer = (state =initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            };
            state.postData.unshift(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return (state);
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;