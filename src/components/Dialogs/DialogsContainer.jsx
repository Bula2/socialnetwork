import {addMesActionCreator, updateNewMesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs);