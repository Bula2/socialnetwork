import React from "react";
import {addMesActionCreator, updateNewMesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMes: () => {
            dispatch(addMesActionCreator());
        },
        updateNewMesText: (text) => {
            dispatch(updateNewMesActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;