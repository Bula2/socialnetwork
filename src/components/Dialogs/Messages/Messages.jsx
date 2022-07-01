import cls from "./Messages.module.scss"

const Messages = () =>{
    return(
        <div className={cls.messages}>
            <div className={cls.message}>Привет</div>
            <div className={cls.message}>Пока</div>
            <div className={cls.message}>Куку</div>
        </div>
    );
}

export default Messages