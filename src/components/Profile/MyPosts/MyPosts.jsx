import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import React from "react";

const MyPosts = (props) => {

    let postElements = props.profilePage.postData.map(post => <Post message={post.post} key={post.id} likes={post.likes}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) =>{
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <textarea onChange={onPostChange} placeholder="Новый пост" title="Новый пост" value={props.profilePage.newPostText}/>
                <button title="Опубликовать" onClick={onAddPost}>Опубликовать</button>
            </div>
            <div className={cls.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;