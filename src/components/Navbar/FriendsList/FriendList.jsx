import cls from "./FriendsList.module.scss"
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
    let friendslist = props.state.friendsData.map(friend => <NavLink to="/friends"><img src={friend.avatar} alt={friend.name} title={friend.name}/></NavLink>);
  return(
      <div className={cls.friends_avatar}>
          {friendslist}
      </div>
  );
}

export default FriendsList;