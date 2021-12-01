import {SET_USER_DATA} from "./types";

let initialState = {
    login: null,
    password: null,
    isAuth: false
}

const authUser = JSON.parse(localStorage.getItem("user"))

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_DATA:
            if (payload.login === authUser.login && payload.password === authUser.password) {
                authUser.isAuth = true
                localStorage.setItem("user", JSON.stringify(authUser))
                return {
                    ...state, ...payload, isAuth: true
                }
            } else {
                return {
                    error: "Вы ввели неверные данные, попробуйте еще"
                }
            }
        default:
            return state
    }
}