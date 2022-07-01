import cls from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}><NavLink to="/profile" className={clsName => clsName.isActive ? cls.active : '' } title="Профиль">Профиль</NavLink></div>
            <div className={cls.item}><NavLink to="/dialogs" className={clsName => clsName.isActive ? cls.active : '' }  title="Сообщения">Сообщения</NavLink></div>
            <div className={cls.item}><NavLink to="/news" className={clsName => clsName.isActive ? cls.active : '' }  title="Новости">Новости</NavLink></div>
            <div className={cls.item}><NavLink to="/music" className={clsName => clsName.isActive ? cls.active : '' }  title="Музыка">Музыка</NavLink></div>
            <div className={cls.item}><NavLink to="/settings" className={clsName => clsName.isActive ? cls.active : '' }  title="Настройки">Настройки</NavLink></div>
        </nav>
    );
}

export default Navbar;