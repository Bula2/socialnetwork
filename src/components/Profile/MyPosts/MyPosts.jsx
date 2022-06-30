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
                    <Post message="Всем пис" likes="2"/>
                    <Post message="Это йа" likes="5"/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;