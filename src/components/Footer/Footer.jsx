import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.footer_text}>
                <a href="/">Все права защищены &copy;</a>
                <a href="/" title="we are slavers">We are Slavers</a>
                <a href="/">Пользовательское соглашение</a>
            </div>
        </footer>
    );
}

export default Footer;