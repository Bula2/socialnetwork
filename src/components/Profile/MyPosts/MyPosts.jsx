import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.postData.map(post => <Post message={post.post} likes={post.likes}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostEl.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <textarea onChange={onPostChange} ref={newPostEl} placeholder="Новый пост" title="Новый пост" value={props.newPostText}/>
                <button title="Опубликовать" onClick={addPost}>Опубликовать</button>
            </div>
            <div className={cls.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;