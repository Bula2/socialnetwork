import React from "react";
import cls from "./Users.module.scss"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, avatar: "/img/f1.jpg", inFriends: true, fullName: "Кикимора Болотная", status: "Ем ежей",
                location: {country: "Россия", city: "Черняховск"}
            },
            {
                id: 2, avatar: "/img/f1.jpg", inFriends: true, fullName: "Андрия Толстолобая", status: "Не ем ежей",
                location: {country: "Россия", city: "Зеленоградск"}
            },
            {
                id: 3, avatar: "/img/f1.jpg", inFriends: false, fullName: "Виктор Мышехвост", status: "Выше хвост!",
                location: {country: "Россия", city: "Калининграда"}
            },
            {
                id: 4,
                avatar: "/img/f1.jpg",
                inFriends: false,
                fullName: "Генадий Бодрыйрост",
                status: "Не растим, а растем",
                location: {country: "Россия", city: "Черняховск"}
            },
        ]);
    }

    return (
        <div className={cls.users}>
            {props.users.map(user =>
                <div key={user.id} className={cls.item}>
                    <div className={cls.left_part}>
                        <img src={user.avatar} title={user.fullName} alt={user.fullName}/>
                        <div>
                            {user.inFriends ?
                                <button onClick={() => {props.unfollow(user.id)}}>Убрать из друзья</button>
                                : <button onClick={() => {props.follow(user.id)}}>Добавить в друзья</button>
                            }
                        </div>
                    </div>
                    <div className={cls.central_part}>
                        <div className={cls.name}><span>{user.fullName}</span></div>
                        <div className={cls.status}><span>{user.status}</span></div>
                    </div>
                    <div className={cls.right_part}>
                        <div className={cls.country}><span>{user.location.country},</span></div>
                        <div className={cls.city}><span>{user.location.city}</span></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;