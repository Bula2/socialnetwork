import React from "react";
import cls from "./ProfileStatus.module.scss"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status){
            this.setState({status:this.props.status});
        }
    }

    render() {
        return (
            <div className={cls.profile_status}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status!== ""? this.props.status : "Статуса нет"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                  placeholder={"Изменить статус"} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;