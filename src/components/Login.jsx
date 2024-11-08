import "./Login.css"
import { useState } from "react";

function Login()
{/*
    const[content, setContent] = useState("login");

    const[isVisible, setVisible] = useState(true);

    const handleClick = () => {
        if(isVisible)
    }

    const setLogin = () => {
        setContent("login");
        console.log("login");
    }
    const setReg = () => {
        setContent("regist");
        console.log("reg");
    }*/

    return(<>
        <div className="container">
            <div className="buttons">
                <button className="loginBtn logBtn"/* onClick={setLogin}*/>Login</button>
                <button className="registrBtn logBtn"/* onClick={setReg}*/>Registration</button>
            </div>
            <div className="loginForm">
                <input type="email" placeholder="Enter your email"/>
                <input type="password"placeholder="Enter your password"></input>
                <button className="pushLogin">Login</button>
            </div>
            <div className="regForm" /*style={setLogin ? 'none' : 'block'}*/>
                <input type="email" placeholder="Enter your email"/>
                <input type="password"placeholder="Enter your password"></input>
            </div>
        </div>
    </>);
}

export default Login