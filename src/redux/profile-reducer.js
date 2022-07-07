const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {

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
    return(state);
}

export const addPostActionCreator = () => ({ type: ADD_POST})

export const updateNewPostActionCreator = (text) =>
    ({type : UPDATE_NEW_POST_TEXT, newText : text })

export default profileReducer;