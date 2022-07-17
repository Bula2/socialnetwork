import cls from "./Login.module.scss"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Логин"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type="text" placeholder={"Пароль"} name={"password"} component={"input"}/>
            </div>
            <div><Field component={"input"} name={"rememberMe"} type="checkbox"/> Запомнить меня
            </div>
            <div>
                <button>Вход</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log (formData);
    }
    return (
        <div className={cls.login}>
            <h1>Вход</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;