
import React from "react";
import "./index.css";

const LoginForm = () => {
    return (
        <div className="login-container">
            <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725085366/Preview_3_u4ch2z.png" alt="logo-here" className="logo-image"/>
            <div className="image-con">
                <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725083306/Saly-3_ehkamc.jpg"
                alt="Driverboy "className="image1"/>
            </div>
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="password-container">
                    <p className="pass">forgot password</p>
                </div>
                <button type="submit" className="btn-login">Login</button>
            </form>
            <div>
                <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725083311/Saly-2_xlmkv4.jpg"
                alt="delivery boy" className="image2"/>
            </div>
        </div>
    );
};

export default LoginForm;
