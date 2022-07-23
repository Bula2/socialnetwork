import f2Img from "./../assets/img/f2.jpg";
import avatarImg from "./../assets/img/avatar.jpg";

const ADD_MES = "dialogs/ADD-MES";
let initialState = {
    dialogsData: [
        {id: 1, name: "Мишаня"},
        {id: 2, name: "Филя"},
        {id: 3, name: "Техник"},
        {id: 4, name: "Егорчик"},
        {id: 5, name: "Булай"},
    ],
    messagesData: [
        {id: 1, avatar: f2Img , name: "Техник", message: "И привет"},
        {id: 2, avatar: avatarImg, name: "Булай", message: "И пока"},
        {id: 3, avatar: f2Img , name: "Техник", message: "И все, такие дела"},
        {id: 4, avatar: avatarImg, name: "Булай", message: "После нас останиться лишь мусор"},
        {
            id: 5,
            avatar: f2Img ,
            name: "Техник",
            message: "Наша культура — мусор, наше искусство — мусор, " +
                "Разноцветные стекляшки и блестящие бусы, " +
                "Для современных дикарей с утончённым вкусом. " +
                "А мне так хочется заблудиться под небом Аустерлица, " +
                "И стать маленьким принцем, а не диванным рыцарем, " +
                "Тешить своё любопытство, а не только быт свой."
        },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MES: {
            let newMes = {
                id: 6,
                avatar: avatarImg,
                name: "Булай",
                message: action.mes
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMes],
            }
        }
        default:
            return state;
    }
}

export const addMesActionCreator = (mes) => ({type: ADD_MES, mes})


export default dialogsReducer;