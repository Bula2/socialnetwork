import cls from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import DialogItem from "./DiaolgItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData.map(message => <Messages message={message}/>);

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogs_items}>
                <div className={cls.item_head}><h3>Мои сообщения</h3></div>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                <div className={cls.main_dialog}>
                {messagesElements}
                </div>
                <div className={cls.message_input}>
                    <textarea title="Отправить" placeholder="Сообщение"/>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;