import cls from "./Preloader.module.scss"
import spinImg from "./../../../assets/img/spin.svg"

let Preloader = () => {
    return (<>
            <img src={spinImg} alt="Загрузка"/>
        </>
    )
}

export default Preloader;
