import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [ form, setForm ] = useState({
        'email': '',
        'password': ''
    })
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        let user = {
            'email' : form.email,
            'password': form.password
        }
        let URL = import.meta.env.VITE_BACKEND_URL
        fetch(URL + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('token', data.access_token)
            setIsAuthenticated(true)
            navigate('/private')})
        
        setForm({
            'email': '',
            'password': ''
        })
    }

    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const logout = () => {
        if (isAuthenticated) {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
        }
    }

    if (isAuthenticated)
        return (
             <div className="container text-center p-5">
                <span className="display-5 text-white border border-black p-3 rounded-pill bg-primary">You are already Logged in</span>
                <div className="mt-5 d-flex gap-4 justify-content-center">
                    <button className="btn btn-outline-danger btn-lg" onClick={logout}>Log out</button>
                </div>
             </div>
        )

    return (

        <div className="container text-center p-5">
            <span className="display-5 text-white border border-black p-3 rounded-pill bg-primary">Log in</span>
            <div className="d-flex justify-content-center gap-3 my-5">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>

                <label htmlFor="contrasena">Password:</label>
                <input type="password" id="contrasena" name="contrasena" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
            </div>
            <div>
                <button className="btn btn-outline-primary btn-lg" onClick={login}>Log in</button>
            </div>
        </div>
    )
}

export default Login