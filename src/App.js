import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "./redux/actions";

function App() {
    const [value, setValue] = useState({login: "", password: ""})
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.isAuth)
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(authAction(value))
    }

    return (
        <div className="App">
            <form>
                <input value={value.login} onChange={e => setValue({...value, login: e.target.value})} type="text"
                       placeholder="Логин"/>
                <input value={value.password} onChange={e => setValue({...value, password: e.target.value})}
                       type="password" placeholder="Пароль"/>
                <button onClick={submitHandler}>Войти</button>
            </form>
            {auth ? <p>Вы вошли!</p> : <p>Вы не вошли!</p>}
        </div>
    );
}


export default App;
