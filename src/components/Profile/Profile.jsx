import cls from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "./../Common/Preloader/Preloader";
import React from "react";

const Profile = (props) => {

    if (!props.profile) return <center><Preloader/></center>;

    return (
        <div className={cls.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateUserStatus={props.updateUserStatus}
                         isPhotoUpload={props.isPhotoUpload} uploadPhoto={props.uploadPhoto}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer profile={props.profile}/>
        </div>
    );
}

export default Profile;