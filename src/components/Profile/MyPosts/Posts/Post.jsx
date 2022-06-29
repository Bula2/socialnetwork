import cls from "./Post.module.scss";

const Post = () => {
    return (
        <div>
            <li className={cls.item}><a href="src/components/Profile/Profile#">Я кто?</a></li>
        </div>
    );
}

export default Post;