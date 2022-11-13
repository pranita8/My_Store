import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();   //prevent page from refresh
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            navigate("/");
            toast("Login Suceessfully!");
          }
        })
        .catch((err) => toast(err.message));

       
    };
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //console.log(auth);
                if (auth) {
                    navigate("/");
                    toast("Account is Created Successfully!");
                }
               
            })
          
            .catch(error => toast(error.message));
           
        // fancy firebase register
    };

    return (
        <div className="login">
             <div class="background">
            <div className="shape"></div>
            <div className="shape"></div>
            </div>
            <div className="bag">
            <form>
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://mypillow.blob.core.windows.net/web/img/ms/ms-logo-1.png"
                />
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>
               
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login__signInButton">Sign In</button>

                
                <p> By signing in you agree the Terms and Conditions of the My_Store
                    . Please see our privacy notice and out cookies policy</p>

                <button onClick={register}
                    className="login__registerButton"> Create your My_Store Account </button>
                    </div>
                    </form>
                    </div>
        </div>
                
            


    )
}

export default Login;