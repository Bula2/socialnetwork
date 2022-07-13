import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY" : "1d7424f1-74bb-47ad-b49d-5e64e5a85014"}
});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

