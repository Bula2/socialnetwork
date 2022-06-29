import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <div className={cls.input}>
                    <textarea placeholder="Новый пост" title="Новый пост"/>
                </div>
                <button title="Опубликовать">Опубликовать</button>
            </div>
            <div className={cls.posts}>
                <ul>
                    <Post/>
                    <Post/>
                    <Post/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;