import React, {useRef} from 'react'
import './SignUpscreen.css'
import { auth } from '../../firebase';
import {  useNavigate } from 'react-router-dom';
const SignUpScreen = () => {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const navigate=useNavigate();
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
                console.log(authUser);
                navigate("/home");
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    const SignInbutton=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
                console.log(authUser);
                navigate("/home")
        })
        .catch((error) => {
            alert(error.message);
        });
    }


  return (
    <div className='signupthis'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email Address' onChange={(e)=>(e.preventDefault())} />
            <input ref={passwordRef} type="password" placeholder='Password' onChange={(e)=>(e.preventDefault())}/>
            <button type="submit" onClick={SignInbutton}>Sign In</button>
            <h4>
                <span className='newtonet'>new to NetFlix? </span>
                <span className='signupnow' onClick={register}>Sign Up Now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen
