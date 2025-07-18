import React, { useState } from "react";


const Singup = () => {

    const [ form, setForm ] = useState({
        'email': '',
        'password': ''
    })

    const singup = () => {
        let new_user = {
            'email' : form.email,
            'password': form.password,
            'is_active': true
        }
        let URL = import.meta.env.VITE_BACKEND_URL
        fetch(URL + '/api/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_user)
        })
        setForm({
            'email': '',
            'password': ''
        })
    }

    return (
        <div className="container text-center p-5">
            <span className="display-5 text-white border border-black p-3 rounded-pill bg-success">Sing Up</span>
            <div className="d-flex justify-content-center gap-3 my-5">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>

                <label htmlFor="contrasena">Password:</label>
                <input type="password" id="contrasena" name="contrasena" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
            </div>
            <div>
                <button className="btn btn-outline-success btn-lg" onClick={singup}>Sing up</button>
            </div>
        </div>
    )
}

export default Singup