import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import withRouter from "../../hoc/withRouter";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if (!userId)
                this.props.history.push("/login");
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);