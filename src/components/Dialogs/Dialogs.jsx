import cls from "./Dialogs.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DiaolgItem/DialogItem";
import Messages from "./Messages/Messages";
import {addMesActionCreator, updateNewMesActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData.map(message => <Messages message={message}/>);

    let newMesEl = React.createRef();

    let addMes = () =>{
        debugger;
        props.dispatch(addMesActionCreator());
    }

    let onMesChange = () =>{
        let text = newMesEl.current.value;
        props.dispatch(updateNewMesActionCreator(text));
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
                    <textarea onChange={onMesChange} title="Отправить" placeholder="Сообщение" ref={newMesEl} value={props.dialogsPage.newMesText} />
                    <button onClick={addMes}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;