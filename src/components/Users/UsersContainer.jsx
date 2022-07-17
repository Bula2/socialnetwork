import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage,
    toggleIsFollowingProgress, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} onPageChanged={this.onPageChanged}
                   users={this.props.users} currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleIsFollowingProgress, getUsers
    })(UsersContainer);