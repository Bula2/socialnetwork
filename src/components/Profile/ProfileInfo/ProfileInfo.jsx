import cls from "./ProfileInfo.module.scss";
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={cls.person}>
            <div>
                <img className={cls.avatar} src="/img/avatar.jpg" alt="Аватарка"/>
            </div>
            <div className={cls.person_info}>
                <NavLink to="/profile" title="Это я">Бимасик Дулаев</NavLink>
                <div className={cls.person_main_info}>
                    <span>День рождения: 1 апреля</span>
                    <span>Город: Санкт-Петербург</span>
                    <span>Образование: Неуч</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;