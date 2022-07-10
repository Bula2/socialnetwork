import React from "react";
import cls from "./Users.module.scss"
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount (){
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return <div className={cls.users}>
            {this.props.users.map(user =>
                <div key={user.id} className={cls.item}>
                    <div className={cls.left_part}>
                        <img src={user.photos.small != null ? user.photos.small : "/img/f1.jpg"} title={user.name}
                             alt={user.name}/>
                        <div>
                            {user.inFriends ?
                                <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Убрать из друзья</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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
                </div>
            )}
        </div>
    }
}

export default Users;