import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let postElements = props.postData.map(post => <Post message={post.post} likes={post.likes}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) =>{
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts/>
    );
}

export default MyPostsContainer;