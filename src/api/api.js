import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    data: null,
    withCredentials: true,
    headers: {"API-KEY" : "1d7424f1-74bb-47ad-b49d-5e64e5a85014"}
});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    addFriend(id){
        return instance.post(`follow/${id}`)
    },
    deleteFriend(id){
        return instance.delete(`follow/${id}`)
    }

}

export const authAPI ={
    loginUser(){
        return instance.get(`auth/me`)
    },
    loginMe(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutMe(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI ={
    getProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get(`/profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`/profile/status`, {status: status})
    }
}

