import cls from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={cls.content}>
            <div className={cls.person}>
                <div>
                <img className={cls.avatar} src="/img/avatar.jpg" alt="Аватарка"/>
                </div>
                <div className={cls.person_info}>
                    <a href="src/components/Profile/Profile#" title="Это я">Бимасик Дулаев</a>
                    <div className={cls.person_main_info}>
                        <span>День рождения: 1 апреля</span>
                        <span>Город: Санкт-Петербург</span>
                        <span>Образование: Неуч</span>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;