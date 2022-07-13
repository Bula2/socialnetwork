import cls from "./Post.module.scss";
import {NavLink} from "react-router-dom";

const Post = (props) => {

    return (
        <div className={cls.item}>
                <NavLink to="/profile"><img src={props.profile.photos.small!=null ? props.profile.photos.small : "/img/default_user.png"} alt=""/>{props.message}</NavLink>
                <NavLink to="/profile" className={cls.likes}>&#128077;{props.likes}</NavLink>
        </div>
    );
}

export default Post;