import FriendsList from "./FriendList";

const FriendsListContainer = (props) => {
    return(
        <FriendsList friendsData={props.store.getState().navbarPage.friendsData}/>
    );
}
export default FriendsListContainer;