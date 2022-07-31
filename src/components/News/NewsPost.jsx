import cls from "./News.module.scss"

const NewsPost = ({annotation, newsText, newsPhoto, likes}) => {
    return (
        <div className={cls.news_post}>
            <div className={cls.left_part_news}>
                <div>
                <h3>{annotation}</h3>
                </div>
                <div>
                <p>{newsText}</p>
                </div>
                <div className={cls.likes}>
                    <span>&#128077;{likes}</span>
                </div>
            </div>
            <div><img src={newsPhoto} alt=""/></div>
        </div>
    )
}


export default NewsPost