import cls from "./Messages.module.scss"

const Messages = (props) =>{
    return(
        <div>
            <div className={cls.message}>{props.message}</div>
        </div>
    );
}

export default Messages