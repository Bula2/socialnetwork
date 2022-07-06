import cls from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={cls.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch = {props.dispatch}
            />
        </div>
    );
}

export default Profile;