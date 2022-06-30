import cls from "./Header.module.scss";

const Header = () => {
    return (
        <header className={cls.header}>
            <a href="/"><img src="/img/logo.png" alt="Slave" title="Slave"/></a>
            <div className={cls.header__auth}>
                <a href="/" title="Зарегестрироваться">Регистрация</a>
                <a href="/" title="Войти">Вход</a>
            </div>
        </header>
    );
}

export default Header;