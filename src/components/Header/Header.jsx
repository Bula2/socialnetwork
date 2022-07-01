import cls from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={cls.header}>
            <NavLink to="/"><img src="/img/logo.png" alt="Slave" title="Slave"/></NavLink>
            <div className={cls.header__auth}>
                <NavLink to="/" title="Зарегестрироваться">Регистрация</NavLink>
                <NavLink to="/" title="Войти">Вход</NavLink>
            </div>
        </header>
    );
}

export default Header;