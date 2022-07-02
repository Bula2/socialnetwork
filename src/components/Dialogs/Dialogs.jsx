import cls from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import DialogItem from "./DiaolgsItems/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogs_items}>
                <div className={cls.item_head}><h3>Мои сообщения</h3></div>
                   <DialogItem name="Мишаня" id="1"/>
                <DialogItem name="Мишаня" id="1"/>
                <DialogItem name="Мишаня" id="1"/>
            </div>
            <div className={cls.messages}>
                <Messages message="Hello"/>
                <Messages message="Hello"/>
                <Messages message="Hello"/>
                <Messages message="Hello"/>
            </div>
        </div>
    );
}

export default Dialogs;