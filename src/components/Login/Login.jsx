import cls from "./Login.module.scss"
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/ControlsForm/ControlForm";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginMe, logoutMe} from "../../redux/auth_reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Логин"}
                       name={"email"} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="password" placeholder={"Пароль"}
                       name={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div><Field component={Input} name={"rememberMe"} type="checkbox"/> Запомнить меня
            </div>
            {props.error &&
                <div className={cls.form_summary_error}>
                    <span>{props.error}</span>
                </div>
            }
            <div>
                <button>Вход</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginMe(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={cls.login}>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginMe, logoutMe})(Login);