import React from "react"
import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/main" element={<Main/>}/>
            </Routes>
        </>
    );

}


export default App;
