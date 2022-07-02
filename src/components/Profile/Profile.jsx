import cls from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={cls.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;