import cls from "./DialogsItems.module.scss"
import {NavLink} from "react-router-dom";

const DialogsItems = () =>{
    return(
        <div className={cls.dialogs_items}>
            <h3 className={cls.item_head}>Мои сообщения</h3>
            <div className={cls.item}><NavLink to="/dialogs/1" >Мишаня</NavLink></div>
            <div className={cls.item}><NavLink to="/dialogs/2">Техник</NavLink></div>
            <div className={cls.item}><NavLink to="/dialogs/3">Филя</NavLink></div>
            <div className={cls.item}><NavLink to="/dialogs/4">Кэп</NavLink></div>
        </div>
    );
}

export default DialogsItems;