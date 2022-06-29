import cls from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}><a href="src/components/Navbar/Navbar#" title="Профиль">Профиль</a></div>
            <div className={cls.item}><a href="src/components/Navbar/Navbar#" title="Сообщения">Сообщения</a></div>
            <div className={cls.item}><a href="src/components/Navbar/Navbar#" title="Новости">Новости</a></div>
            <div className={cls.item}><a href="src/components/Navbar/Navbar#" title="Музыка">Музыка</a></div>
            <div className={cls.item}><a href="src/components/Navbar/Navbar#" title="Настройки">Настройки</a></div>
        </nav>
    );
}

export default Navbar;