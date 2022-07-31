import cls from "./News.module.scss"
import {connect} from "react-redux";
import NewsPost from "./NewsPost";

const News = ({newsList}) =>{
    return(
        <div className={cls.news}>
            <h1>Новости</h1>
            {newsList.map(news =>
                <NewsPost key={news.id} annotation={news.annotation} newsText={news.newsText}
                          newsPhoto={news.newsPhoto} likes={news.likes}/>
            )}
        </div>
    )
}

export default connect((state) => ({
    newsList: state.news.newsList
}), {})(News);
