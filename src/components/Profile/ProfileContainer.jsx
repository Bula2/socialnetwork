import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import withRouter from "./../../withRouter";


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
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId
});


let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(withUrlDataContainerComponent);