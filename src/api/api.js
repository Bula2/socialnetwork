import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    data: null,
    withCredentials: true,
    headers: {"API-KEY" : "1d7424f1-74bb-47ad-b49d-5e64e5a85014"}
});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    addFriend(id){
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    deleteFriend(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    login(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

