import { Outlet } from "react-router"
import { NavLink, Link } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext";

const SharedLayout = () => {
    const { userName, setUserName } = useGlobalContext();
    
    const userPass = JSON.parse(localStorage.getItem('userPass'));
    
    const exit = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userPass');
        setUserName(JSON.parse(localStorage.getItem('userName')));
    }

    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">naalaim</h1>
                    <ul className="nav-links">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'active' : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            {userName === 'admin' && userPass === 'adminpass' &&
                                <NavLink
                                    to='/add'
                                    className={({ isActive }) => isActive ? 'active' : undefined}>
                                    Add Product
                                </NavLink>}
                        </li>
                    </ul>
                    <div className="log-in-and-out">
                        {userName && <p className="user-name">{`hello ${userName}`}</p>}
                        {!userName &&
                            <Link
                                to='/logIn'
                                className='btn login-btn'>
                                Log In
                            </Link>
                        }
                        {userName &&
                            <Link
                                to='/'
                                className='btn login-btn'
                                onClick={exit}>
                                Log Out
                            </Link>
                        }
                    </div>
                </nav>
                <main>
                    <Outlet />
                </main>
                <footer className="footer">
                    <p>All Rights Reserved 2023</p>
                </footer>
            </div>

        </>
    )
}

export default SharedLayout