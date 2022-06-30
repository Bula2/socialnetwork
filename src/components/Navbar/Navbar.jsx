import cls from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}><a href="/profile" title="Профиль">Профиль</a></div>
            <div className={cls.item}><a href="/dialogs" title="Сообщения">Сообщения</a></div>
            <div className={cls.item}><a href="/news" title="Новости">Новости</a></div>
            <div className={cls.item}><a href="/music" title="Музыка">Музыка</a></div>
            <div className={cls.item}><a href="/settings" title="Настройки">Настройки</a></div>
        </nav>
    );
}

export default Navbar;