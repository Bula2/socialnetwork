import cls from "./Post.module.scss";
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className={cls.post}>
            <li className={cls.item}>
                <NavLink to="/profile"><img src="img/avatar.jpg" alt=""/>{props.message}</NavLink>
                <NavLink to="/profile" className={cls.likes}>&#128077;{props.likes}</NavLink>
            </li>
        </div>
    );
}

export default Post;