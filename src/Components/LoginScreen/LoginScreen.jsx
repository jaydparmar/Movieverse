import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../logo.png"
import SignUpScreen from '../SignUp/SignUpScreen';
import "./loginscreen.css";
const LoginScreen = () => {
    const [signin, setsignin] = useState(false);
    const navigate=useNavigate();
    const signinClick=()=>{
        if(signin)
            setsignin(false);
        else
            setsignin(true);
        // navigate('/Movies');
    }
    return (
        <div className="login">
            <div className="loginbg">
                <img src={logo} alt="logo" />
                <button onClick={() => signinClick()}
                    className='forbtn'>{signin?'Home':'Signin'}</button>
                <div className="netfliximg" />
            </div>
            <div className="loginbody">
                {
                    signin ?
                        (<SignUpScreen />)  
                        : (
                            <>
                                <h1>Unlimited films, TV Programme and
                                    more.</h1>
                                <h2>Watch anywhere, Cancel at any time.</h2>
                                <h3>Ready to watch?
                                    Enter your email to create or restart your
                                    membership</h3>
                                <div className="logininput">
                                    <form>
                                        <input type="email" placeholder='Email Address' />
                                        <button onClick={() => setsignin(true)}
                                            className="btnStart">Get Started</button>
                                    </form>
                                </div>
                            </>
                        )
                }

            </div>
        </div>
    )
}

export default LoginScreen
