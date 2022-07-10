import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountActionCreator(usersCount))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;