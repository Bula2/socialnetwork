import cls from "./Dialogs.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DiaolgItem/DialogItem";
import Messages from "./Messages/Messages";
import {addMesActionCreator, updateNewMesActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(message => <Messages message={message}/>);

    let onAddMes = () =>{
        props.addMes();
    }

    let onMesChange = (e) =>{
        let text = e.target.value;
        props.onMesChange(text);
    }

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
                    <textarea onChange={onMesChange} title="Отправить" placeholder="Сообщение" value={props.newMesText} />
                    <button onClick={onAddMes}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;