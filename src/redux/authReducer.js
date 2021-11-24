import {SET_USER_DATA} from "./types";

const initialState = {
    login: null,
    password: null,
    isAuth: false
}

const user = {
    login: "qqq",
    password: "1234"
}

localStorage.setItem("user", JSON.stringify(user))
const person = JSON.parse(localStorage.getItem("user"))

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_DATA:
            if (payload.login === person.login && payload.password === person.password) {
                return {
                    ...state, ...payload, isAuth: true
                }
            } else return state
        default:
            return state
    }
}