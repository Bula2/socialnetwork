import cls from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/ControlsForm/ControlForm";

const MyPosts = (props) => {

    let postElements = props.profilePage.postData.map(post =>
        <Post profile={props.profile} message={post.post} key={post.id} likes={post.likes}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPost);
    }

    return (
        <div>
            <div className={cls.make_posts}>
                <span>Мои посты</span>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={cls.posts}>
                {postElements}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPost"}
                   title="Новый пост" placeholder="Новый пост"
                   validate={[required, maxLengthCreator(100)]}
            />
            <button title="Опубликовать">Опубликовать</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;