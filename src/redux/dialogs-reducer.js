const ADD_MES = "ADD-MES";
const UPDATE_NEW_MES_TEXT = "UPDATE-NEW-MES-TEXT";

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MES:
            let newMes = {
                id: 6,
                avatar: "/img/avatar.jpg",
                name: "Булай",
                message: state.newMesText
            };
            state.messagesData.push(newMes);
            state.newMesText = "";
            break;
        case UPDATE_NEW_MES_TEXT:
            state.newMesText = action.newText;
            break;
    }
    return (state);
}

export const addMesActionCreator = () => ({type: ADD_MES})

export const updateNewMesActionCreator = (text) =>
    ({type : UPDATE_NEW_MES_TEXT, newText : text })

export default dialogsReducer;