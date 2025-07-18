import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Private = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true)

        const logout = () => {
        if (isAuthenticated) {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
            navigate('/login')
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirige si no hay token
        }
    }, []);

    return (
        <div className="container text-center p-5">
            <h1 className="display-5 text-white border border-black p-3 rounded-pill bg-dark">Área privada 🔐</h1>
                <div className="mt-5 d-flex gap-4 justify-content-center">
                    <button className="btn btn-outline-danger btn-lg" onClick={logout}>Log out</button>
                </div>
        </div>
    );
};

export default Private;