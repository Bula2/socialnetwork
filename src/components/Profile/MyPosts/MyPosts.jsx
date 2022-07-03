import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postElements = props.postData.map( post => <Post message={post.post} likes={post.likes}/>);

    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <textarea placeholder="Новый пост" title="Новый пост"/>
                <button title="Опубликовать">Опубликовать</button>
            </div>
            <div className={cls.posts}>
                <ul>
                    {postElements}
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;