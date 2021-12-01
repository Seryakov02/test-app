import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../redux/actions";
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const [value, setValue] = useState({login: "", password: ""})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.isAuth)
    const error = useSelector(state => state.auth.error)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(authAction(value))
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <input value={value.login} onChange={e => setValue({...value, login: e.target.value})}
                       type="text"
                       placeholder="Логин"/>
                <input value={value.password} onChange={e => setValue({...value, password: e.target.value})}
                       type="password" placeholder="Пароль"/>
                <button>Войти</button>
            </form>
            {auth ? navigate("/main") : <p>{error}</p>}
        </div>
    );
};

export default LoginForm;