import React from "react";
import {addMesActionCreator, updateNewMesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state=props.store.getState();

    let addMes = () =>{
        props.store.dispatch(addMesActionCreator());
    }

    let onMesChange = (text) =>{
        props.store.dispatch(updateNewMesActionCreator(text));
    }

    return (
        <Dialogs dialogsData={state.dialogsPage.dialogsData}
                 messagesData={state.dialogsPage.messagesData}
                 newMesText={state.dialogsPage.newMesText}
                 addMes={addMes}
                 onMesChange={onMesChange}
            />
    );
}

export default DialogsContainer;