import React from "react";
import cls from "./Users.module.scss"
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={cls.users}>
        <div className={cls.numbers_page}>
            <span>Выбрать страницу:</span>
            {pages.map(page => <span onClick={() => {
                props.onPageChanged(page)
            }} className={props.currentPage === page && cls.selected_page}>{page}</span>)}
        </div>
        {props.isFetching ?
            <div className={cls.preloader}><Preloader/></div> :
            props.users.map(user => <div key={user.id} className={cls.item}>
                <div className={cls.left_part}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : "/img/default_user.png"}
                             title={user.name}
                             alt={user.name}/>
                    </NavLink>
                    <div>
                        {user.inFriends ?
                            <button onClick={() => {
                                axios.delete(
                                    `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                                    {withCredentials: true,
                                        headers: {"API-KEY" : "1d7424f1-74bb-47ad-b49d-5e64e5a85014"}
                                    }).then(
                                    response => {
                                        if (response.data.resultCode === 0)
                                            props.unfollow(user.id);
                                    })
                            }}>Убрать из друзья</button>
                            : <button onClick={() => {
                                axios.post(
                                    `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                                    null,
                                    {withCredentials: true,
                                        headers: {"API-KEY" : "1d7424f1-74bb-47ad-b49d-5e64e5a85014"}
                                    }).then(
                                    response => {
                                        if (response.data.resultCode === 0)
                                            props.follow(user.id);
                                    })
                            }}>Добавить в друзья</button>
                        }
                    </div>
                </div>
                <div className={cls.central_part}>
                    <div className={cls.name}><span>{user.name}</span></div>
                    <div className={cls.status}><span>Всем привет</span></div>
                </div>
                <div className={cls.right_part}>
                    <div className={cls.country}><span>Россия</span></div>
                    <div className={cls.city}><span>Калининград</span></div>
                </div>
            </div>)
        }
    </div>
}
export default Users;