import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import withRouter from "../../hoc/withRouter";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId){
            userId = 24892;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);