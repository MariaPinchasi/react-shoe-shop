import { Outlet } from "react-router"
import { NavLink, Link } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext";

const SharedLayout = () => {
    const { user, logout } = useGlobalContext();

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
                            {user && user.isAdmin &&
                                <NavLink
                                    to='/add'
                                    className={({ isActive }) => isActive ? 'active' : undefined}>
                                    Add Product
                                </NavLink>}
                        </li>
                    </ul>
                    <div className="log-in-and-out">
                        {user && <p className="user-name">{`hello ${user.name}`}</p>}
                        {!user &&
                            <Link
                                to='/logIn'
                                className='btn login-btn'>
                                Log In
                            </Link>
                        }
                        {user &&
                            <Link
                                to='/'
                                className='btn login-btn'
                                onClick={logout}>
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