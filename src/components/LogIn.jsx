import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useNavigate } from 'react-router'

const LogIn = () => {
    const navigate = useNavigate();
    const { setUserName } = useGlobalContext();

    const [user, setUser] = useState({
        name: "",
        password: "",
        isUserAdmin: false
    });

    const [errors, setErrors] = useState({
        name: null,
        password: null
    })


    useEffect(() => {
        localStorage.setItem('userName', JSON.stringify(user.name));
        localStorage.setItem('userPass', JSON.stringify(user.password));
    }, [user])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        setErrors(prevState => (
            {
                ...prevState,
                [e.target.name]: null
            }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};
        if (user.name.length < 3) {
            newErrors.name = "name must bo at least 3 characters long";
            isValid = false;
        }
        if (user.password.length < 6) {
            newErrors.password = "password must bo at least 6 characters long";
            isValid = false;
        }
        setErrors(newErrors);

        if (isValid) {
            setUserName(JSON.parse(localStorage.getItem('userName')));
            navigate('/');
        }
    };
    return (
        <section className="single-shoe-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                    <div className="error-message">{errors.name}</div>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                    <div className="error-message">{errors.password}</div>
                </div>
                <p className="login-info">for admin permissions enter: user: admin, password: adminpass</p>
                <button className="btn update-btn" type="submit">Log In</button>
            </form>
        </section>
    )
}

export default LogIn