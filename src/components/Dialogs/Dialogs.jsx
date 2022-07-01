import cls from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import DialogsItems from "./DiaolgsItems/DialogsItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <DialogsItems/>
            <Messages/>
        </div>
    );
}

export default Dialogs;