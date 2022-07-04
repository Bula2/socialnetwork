let state = {
    dialogsPage:{
        dialogsData: [
            {id: 1, name: "Мишаня"},
            {id: 2, name: "Филя"},
            {id: 3, name: "Техник"},
            {id: 4, name: "Егорчик"},
            {id: 5, name: "Булай"},
        ],
        messagesData: [
            {id: 1, avatar:"/img/f2.jpg", name: "Техник", message: "И привет"},
            {id: 2, avatar:"/img/f2.jpg", name: "Техник", message: "И пока"},
            {id: 3, avatar:"/img/f2.jpg", name: "Техник", message: "И все, такие дела"},
            {id: 4, avatar:"/img/f2.jpg", name: "Техник", message: "После нас останиться лишь мусор"},
            {
                id: 5,avatar:"/img/f2.jpg", name: "Техник", message: "Наша культура — мусор, наше искусство — мусор, " +
                    "Разноцветные стекляшки и блестящие бусы, " +
                    "Для современных дикарей с утончённым вкусом. " +
                    "А мне так хочется заблудиться под небом Аустерлица, " +
                    "И стать маленьким принцем, а не диванным рыцарем, " +
                    "Тешить своё любопытство, а не только быт свой."
            },
        ]

    },
    profilePage:{
        postData: [
            {id: 1, post: "Качeство как клифхэнгер", likes: 2},
            {id: 2, post: "Музло приносит деньги", likes: 4},
            {id: 3, post: "Причем так много", likes: 8},
            {id: 4, post: "Что ты мог подумать - это в тенге", likes: 16},
            {id: 5, post: "Проснись и пой, везёт, если тупой", likes: 32},
        ]
    },
    navbarPage:{
        friendsData:[
            {id: 1, avatar: "/img/f1.jpg", name: "Егорчик"},
            {id: 2, avatar: "/img/f2.jpg", name: "Техник"},
            {id: 3, avatar: "/img/f3.jpg", name: "Мишаня"}
        ]
    }
};

export default state;