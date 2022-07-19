import cls from "./Post.module.scss";
import {NavLink} from "react-router-dom";
import defaultUserImg from "./../../../../assets/img/default_user.png"

const Post = (props) => {

    return (
        <div className={cls.item}>
                <NavLink to="/profile"><img src={props.profile.photos.small!=null ? props.profile.photos.small : defaultUserImg} alt=""/>{props.message}</NavLink>
                <NavLink to="/profile" className={cls.likes}>&#128077;{props.likes}</NavLink>
        </div>
    );
}

export default Post;