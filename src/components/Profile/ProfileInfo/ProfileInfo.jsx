import cls from "./ProfileInfo.module.scss";
import {NavLink} from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateUserStatus} from "../../../redux/profile-reducer";

const Profile = (props) => {

    return (
        <div className={cls.person}>
            <div>
                <img className={cls.avatar} src={props.profile.photos.large!=null ? props.profile.photos.large : "/img/default_user.png"} alt="Аватарка"/>
            </div>
            <div className={cls.person_info}>
                <NavLink to="/profile" title="Это я">{props.profile.fullName}</NavLink>
                <div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div className={cls.person_main_info}>
                    <div className={cls.person_main_info_item}><span>O cебе: </span>{props.profile.aboutMe}</div>
                    <div className={cls.person_main_info_item}><span>В поисках работы: </span>{props.profile.lookingForAJob ? "Да" : "Нет"}</div>
                    <div className={cls.person_main_info_item}><span>Навыки: </span> {props.profile.lookingForAJobDescription}</div>
                </div>
            </div>

        </div>
    );
}

export default Profile;