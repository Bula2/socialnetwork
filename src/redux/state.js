const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MES = "ADD-MES";
const UPDATE_NEW_MES_TEXT = "UPDATE_NEW_MES_TEXT";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Мишаня"},
                {id: 2, name: "Филя"},
                {id: 3, name: "Техник"},
                {id: 4, name: "Егорчик"},
                {id: 5, name: "Булай"},
            ],
            messagesData: [
                {id: 1, avatar: "/img/f2.jpg", name: "Техник", message: "И привет"},
                {id: 2, avatar: "/img/avatar.jpg", name: "Булай", message: "И пока"},
                {id: 3, avatar: "/img/f2.jpg", name: "Техник", message: "И все, такие дела"},
                {id: 4, avatar: "/img/avatar.jpg", name: "Булай", message: "После нас останиться лишь мусор"},
                {
                    id: 5,
                    avatar: "/img/f2.jpg",
                    name: "Техник",
                    message: "Наша культура — мусор, наше искусство — мусор, " +
                        "Разноцветные стекляшки и блестящие бусы, " +
                        "Для современных дикарей с утончённым вкусом. " +
                        "А мне так хочется заблудиться под небом Аустерлица, " +
                        "И стать маленьким принцем, а не диванным рыцарем, " +
                        "Тешить своё любопытство, а не только быт свой."
                },
            ],
            newMesText: ""

        },
        profilePage: {
            postData: [
                {id: 1, post: "Качeство как клифхэнгер", likes: 2},
                {id: 2, post: "Музло приносит деньги", likes: 4},
                {id: 3, post: "Причем так много", likes: 8},
                {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
                {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
            ],
            newPostText: ""
        },
        navbarPage: {
            friendsData: [
                {id: 1, avatar: "/img/f1.jpg", name: "Егорчик"},
                {id: 2, avatar: "/img/f2.jpg", name: "Техник"},
                {id: 3, avatar: "/img/f3.jpg", name: "Мишаня"}
            ]
        }
    },
    _callSubscriber() {},
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        debugger;
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MES){
            let newMes = {
                id: 6,
                avatar: "/img/avatar.jpg",
                name: "Булай",
                message: this._state.dialogsPage.newMesText
            };
            this._state.dialogsPage.messagesData.push(newMes);
            this._state.dialogsPage.newMesText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MES_TEXT){
            this._state.dialogsPage.newMesText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})

export const updateNewPostActionCreator = (text) =>
    ({type : UPDATE_NEW_POST_TEXT, newText : text })

export const addMesActionCreator = () => ({type: ADD_MES})

export const updateNewMesActionCreator = (text) =>
    ({type : UPDATE_NEW_MES_TEXT, newText : text })


export default store;
window.store = store;