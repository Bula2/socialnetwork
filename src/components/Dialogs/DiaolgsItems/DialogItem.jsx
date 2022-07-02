import cls from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cls.dialog_item}>
            <div className={cls.item}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    );
}

export default DialogItem;