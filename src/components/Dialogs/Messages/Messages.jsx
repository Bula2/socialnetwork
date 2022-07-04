import cls from "./Messages.module.scss"

const Messages = (props) =>{
    return(
        <div>
            <div className={cls.message}><a href="/friends" title={props.message.name}><img src={props.message.avatar} alt={props.name}/></a>{props.message.message}</div>
        </div>
    );
}

export default Messages