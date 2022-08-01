import newsPhoto from "./../assets/img/news_photo.png"
import newsPhoto1 from "./../assets/img/news_photo1.jpg"
import newsPhoto2 from "./../assets/img/news_photo2.jpg"
import newsPhoto3 from "./../assets/img/news_photo3.jpg"

const ADD_LIKE = "news/ADD_LIKE";
const DEL_LIKE = "news/DEL_LIKE";

let initialState = {
    newsList: [
        {
            id: 1,
            annotation: "Агент под прикрытием ",
            newsText: "В Бразилии копы накрыли огромный склад с тоннами запрещенки. А ротвейлер, который должен был защищать " +
                "склад и хозяев, решил не перетруждаться и лечь спать с повязанными хозяевами рядом.",
            newsPhoto: newsPhoto2,
            likes: 0,
            likeWasAdd: false
        },
        {
            id: 2, annotation: "Как же мило",
            newsText: "Испанский натуралист Фрэнк Куэста решил искупаться в реке," +
                " но к нему присоединилась любопытная выдра",
            newsPhoto: newsPhoto1,
            likes: 0,
            likeWasAdd: false
        },
        {
            id: 3, annotation: "Вот это настоящие футбольные фанаты — красавчики",
            newsText: "Нижегородский футбольный клуб поддержал и подарил подарки 14-летнему парню," +
                " которого избили «околофутбольные фанаты»",
            newsPhoto: newsPhoto3,
            likes: 40,
            likeWasAdd: false
        }
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE: {
            return {
                ...state,
                newsList: state.newsList.map(news => {
                    if (news.id === action.id)
                        return {...news, likes: news.likes + 1, likeWasAdd: true}
                    return news
                })
            }
        }

        case DEL_LIKE: {
            return {
                ...state,
                newsList: state.newsList.map(news => {
                    if (news.id === action.id)
                        return {...news, likes: news.likes - 1, likeWasAdd: false}
                    return news
                })
            }
        }
        default:
            return state
    }
}

export const addLike = (id) => ({type: ADD_LIKE, id});
export const delLike = (id) => ({type: DEL_LIKE, id});

export default newsReducer;

