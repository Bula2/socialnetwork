import cls from "./Post.module.scss";

const Post = (props) => {
    return (
        <div className={cls.post}>
            <li className={cls.item}>
                <a href="src/components/Profile/Profile#">{props.message}</a>
                <a href="#" className={cls.likes}>&#128077;{props.likes}</a>
            </li>
        </div>
    );
}

export default Post;