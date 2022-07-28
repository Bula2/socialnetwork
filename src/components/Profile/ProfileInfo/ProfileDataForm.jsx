import cls from "./ProfileInfo.module.scss";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/ControlsForm/ControlForm";


const ProfileDataForm = ({handleSubmit, profile, setEditMode}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={cls.person_main_info}>
                <div className={cls.person_main_info_item}>
                    <span>Имя: </span>
                    <Field placeholder={"Имя"}
                           name={"fullName"} component={Textarea}
                    />
                </div>
                <div className={cls.person_main_info_item}>
                    <span>O cебе: </span>
                    <Field placeholder={"О себе"}
                           name={"aboutMe"} component={Textarea}
                    />
                </div>
                <div className={cls.person_main_info_item}>
                    <span>В поисках работы: </span>
                    <Field type="checkbox"
                           name={"lookingForAJob"} component={Input}
                    />
                </div>
                <div className={cls.person_main_info_item}>
                    <span>Навыки: </span>
                    <Field placeholder={"Навыки"}
                           name={"lookingForAJobDescription"} component={Textarea}/>
                </div>
                <div className={cls.person_main_info_item}>
                    <span>Контакты: </span>
                    {Object.keys(profile.contacts).map(key => {
                        return <div className={cls.person_main_info_item}>
                            <div className={cls.contact}>
                                <span>{key}: </span>
                                <Field placeholder={key}
                                       name={`contacts.${key}`} component={Input}
                                       className={cls.links_input}
                                />
                            </div>
                        </div>
                    })}
                </div>
                <div className={cls.data_form_buttons}>
                    <div className={cls.person_main_button}>
                        <button>Сохранить</button>
                    </div>
                    <div className={cls.person_main_button}>
                        <button onClick={() => setEditMode(false)}>Отменить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileDataFormReduxForm;