import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useNavigate } from 'react-router'

const LogIn = () => {
    const navigate = useNavigate();
    const { login } = useGlobalContext();

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: null,
        password: null
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
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
        if (formData.name.length < 3) {
            newErrors.name = "name must bo at least 3 characters long";
            isValid = false;
        }
        if (formData.password.length < 6) {
            newErrors.password = "password must bo at least 6 characters long";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            login(formData);
            navigate('/');
        }
    };

    return (
        <section className="single-shoe-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <div className="error-message">{errors.name}</div>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <div className="error-message">{errors.password}</div>
                </div>
                <p className="login-info">for admin permissions enter: user: admin, password: adminpass</p>
                <button className="btn update-btn" type="submit">Log In</button>
            </form>
        </section>
    )
}

export default LogIn