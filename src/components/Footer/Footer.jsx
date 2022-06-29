import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.footer_text}>
                <a href="src/components/Footer/Footer" title="we are slavers">We are Slavers</a>
            </div>
        </footer>
    );
}

export default Footer;