import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const handleLogin = () => {
        if (!email || !password) {
            alert('Please fill in all fields!');
        } else {
            alert('Login successful!');
        }
    };
    const handleSignup = () => {
        if (!name || !email || !password) {
            alert('Please fill in all fields!');
        } else {
            alert('Account created successfully!');
        }
    };
    return (
        <section className="login1">
            <div className="container-fluid">
                <div className="box">
                    <div className="row g-0">
                        <div className="col-lg-6 d-flex align-items-stretch">
                            <div className="content">
                                {isSignup ? (
                                    <>
                                        <h1>Creat Account</h1>
                                        <p>Join our family!   Creating your account is quick and easy. Get ready to unlock a personalized experience designed just for you. Let's get started! </p>
                                        <input type="text" placeholder='Enter Name' className='my-2 form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                        <input type="email" placeholder='Enter Email' className='my-2 form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <input type="password" placeholder='Enter Password' className='my-2 form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <div className="d-flex">
                                            <button onClick={handleSignup} className='butn'>Sign Up</button>
                                            <button onClick={() => setIsSignup(false)} className='butn'>Login</button>
                                        </div>
                                    </>) : (
                                    <>
                                        <h1>Hello Again Login!</h1>
                                        <p>Welcome back!  We've missed you. Log in now to explore what's new and enjoy your personalized experience on our website! </p>
                                        <input type="email" placeholder='Enter Email' className='my-2 form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <input type="password" placeholder='Enter Password' className='my-2 form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <NavLink className="link" to="">Forget Password</NavLink><br />
                                        <div className="d-flex">
                                            <NavLink to="/Dashboard" className='butn'>Login</NavLink >
                                            <button onClick={() => setIsSignup(true)} className='butn'>Sign Up</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch d-none d-sm-block">
                            <img src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-126999474.jpg" alt="IMAGE" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Login;
// onClick={handleLogin}