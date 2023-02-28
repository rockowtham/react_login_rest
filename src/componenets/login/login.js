import React from "react";
import './login.css';

export default function login () {

    return(
        <div className="login-wrapper">
        <form>
            <label>
                <p>Username</p>
                <input type="text"></input>
            </label>
            <label>
                <p>Password</p>
                <input type="password"></input>
            </label>
            <div>
                <button type="submit" >Login</button>
            </div>
        </form>
        </div>
    )
}