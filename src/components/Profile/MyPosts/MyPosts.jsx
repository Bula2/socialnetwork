import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import React from "react";

const MyPosts = (props) => {

    let postElements = props.postData.map(post => <Post message={post.post} likes={post.likes}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        let text = newPostEl.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <textarea ref={newPostEl} placeholder="Новый пост" title="Новый пост"/>
                <button title="Опубликовать" onClick={addPost}>Опубликовать</button>
            </div>
            <div className={cls.posts}>
                <ul>
                    {postElements}
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;