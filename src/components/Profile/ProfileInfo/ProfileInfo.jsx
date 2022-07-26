import cls from "./ProfileInfo.module.scss";
import {NavLink} from "react-router-dom";
import defaultUserImg from "./../../../assets/img/default_user.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useEffect} from "react";

const ProfileInfo = ({uploadPhoto, savePhoto, isPhotoUpload,
                         updateUserStatus, status, profile, isOwner}) => {

    const showPhotoUploader = () =>{
        uploadPhoto(true);
    }

    const hidePhotoUploader = () =>{
        uploadPhoto(false);
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }

    }

    useEffect(() => {
        uploadPhoto(false);
    }, [])

    return (
        <div className={cls.person}>
            <div>
                <img className={cls.avatar}
                     src={profile.photos.large != null ? profile.photos.large : defaultUserImg}
                     alt="Аватарка"/>
                {!isOwner &&
                    <div className={cls.change_photo}>
                        { isPhotoUpload ?
                            <input onChange={(e) => {
                                onPhotoSelected(e);
                                hidePhotoUploader();
                            }}
                                   autoFocus={true}
                                   type="file"/> :
                            <button onClick={showPhotoUploader}>Изменить фото</button>}
                    </div>}
            </div>
            <div className={cls.person_info}>
                <NavLink to="/profile" title="Это я">{profile.fullName}</NavLink>
                <div>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
                <div className={cls.person_main_info}>
                    <div className={cls.person_main_info_item}><span>O cебе: </span>{profile.aboutMe}</div>
                    <div className={cls.person_main_info_item}>
                        <span>В поисках работы: </span>{profile.lookingForAJob ? "Да" : "Нет"}</div>
                    <div className={cls.person_main_info_item}>
                        <span>Навыки: </span> {profile.lookingForAJobDescription}</div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;