import cls from "./Header.module.scss";

const Header = () => {
    return (
        <header className={cls.header}>
            <a href="src/components/Header/Header#"><img src="/img/logo.png" alt="Slave" title="Slave"/></a>
            <div className={cls.header__auth}>
                <a href="src/components/Header/Header#" title="Зарегестрироваться">Регистрация</a>
                <a href="src/components/Header/Header#" title="Войти">Вход</a>
            </div>
        </header>
    );
}

export default Header;