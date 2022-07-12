import cls from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={cls.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;