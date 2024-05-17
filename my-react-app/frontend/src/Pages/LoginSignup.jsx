import React, {useState} from 'react'
import './CSS/LoginSignup.css'
import {useNavigate} from 'react-router-dom'
//import { handleRegisterClick } from './JS/LoginSignup.js'
//import { handleLoginClick } from './JS/LoginSignin.js'

const LoginSignup = ()=>{
    // const total = document.getElementById("total");
    
    // const handleRegisterClick = () => {
    //     total.classList.add('active');
    // };
    
    // const handleLoginClick = () => {
    //     total.classList.remove('active');
    // };
    
    //loginsignupin()

    const [state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    }) 


    const changeHandler = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const [isActive, setIsActive] = useState(false)
    const handleRegisterClick = ()=>{
        setIsActive(true)
        setState("Sign Up")
    }
    const handleLoginClick = ()=>{
        setIsActive(false)
        setState("Login")
    }

    const login = async(event)=>{
        event.preventDefault()
        console.log('Login Function Executed', formData)
        let responseData;
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            //mode: 'no-cors',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
                // 'Authorization': 'Bearer <token>',
            },
            body:JSON.stringify(formData),
            // cache: 'no-cache'
        }).then((response)=>response.json()).then((data)=>responseData=data);
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.errors)
        }
    }

    const signup = async(event)=>{
        event.preventDefault()
        console.log('Sign Up Function Executed', formData)
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method: 'POST',
            //mode: 'no-cors',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
                // 'Authorization': 'Bearer <token>',
            },
            body:JSON.stringify(formData),
            // credentials:'include',
            // cache: 'no-cache'
        }).then((response)=>response.json()).then((data)=>responseData=data);
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.errors)
        }
    }

    
    return (
        <div className="total">
                <div className={`loginsignup-in ${isActive ? 'active' : ''}`}>
                    <div className="form-container sign-up">
                        <form action="">
                            <h1>{state}</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <span>or use your email for registertion</span>
                            <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Name"/>
                            <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email"/>
                            <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
                            <button onClick={(event)=>{signup(event)}}>Sign Up </button>
                        </form>
                    </div>

                    <div className="form-container sign-in">
                        <form action="">
                            <h1>{state}</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <span>or use your email password</span>
                            <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email"/>
                            <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
                            <a href="#">Forget Your Password?</a>
                            <button onClick={(event)=>{login(event)}}>Sign In </button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friends!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                            </div>
                        </div>
                     </div>
                </div>
        </div>
    )
}

export default LoginSignup