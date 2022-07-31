import newsPhoto from "./../assets/img/news_photo.png"
import newsPhoto1 from "./../assets/img/news_photo1.jpg"
import newsPhoto2 from "./../assets/img/news_photo2.jpg"
import newsPhoto3 from "./../assets/img/news_photo3.jpg"

let initialState = {
    newsList: [
        {
            id: 1,
            annotation: "Агент под прикрытием ",
            newsText: "В Бразилии копы накрыли огромный склад с тоннами запрещенки. А ротвейлер, который должен был защищать " +
                "склад и хозяев, решил не перетруждаться и лечь спать с повязанными хозяевами рядом.",
            newsPhoto: newsPhoto2,
            likes: 0
        },
        {
            id: 2, annotation: "Как же мило",
            newsText: "Испанский натуралист Фрэнк Куэста решил искупаться в реке," +
                " но к нему присоединилась любопытная выдра",
            newsPhoto: newsPhoto1,
            likes: 0
        },
        {
            id: 3, annotation: "Вот это настоящие футбольные фанаты — красавчики",
            newsText: "Нижегородский футбольный клуб поддержал и подарил подарки 14-летнему парню," +
                " которого избили «околофутбольные фанаты»",
            newsPhoto: newsPhoto3,
            likes: 0
        }
    ]
}

const newsReducer = (state = initialState, action) => {
        return state
}

export default newsReducer;

