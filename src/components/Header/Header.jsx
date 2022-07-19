import cls from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <NavLink to="/"><img className={cls.app_logo} src="/img/logo.png" alt="Slave" title="Slave"/></NavLink>
            <div className={cls.header__auth}>
                {props.isAuth ?
                    <>
                    <NavLink to="/profile" title={props.login}>{props.login}</NavLink>
                    <NavLink to="/profile" onClick={props.logoutMe} title="Выйти">Выход</NavLink>
                    </>:
                    <>
                    <NavLink to="/login" title="Зарегестрироваться">Регистрация</NavLink>
                    <NavLink to="/login" title="Войти">Вход</NavLink>
                    </>
                }
            </div>
        </header>
    );
}

export default Header;