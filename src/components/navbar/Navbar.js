import React, { useContext, useState } from 'react'

import './navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SiBitcoin } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../../context/Context'
function Navbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    //display navabar mobile
    const [isActive, setIsActive] = useState(false);
    const showNavbar = () => {
        setIsActive(!isActive)
    }
    const ActiveLink = (props) => {
        return <NavLink
            style={({ isActive }) => {
                return {
                    color: isActive ? 'var(--primary-color' : ''
                };
            }}
            {...props}
        />
    }
    return (
        <div className='navbar'>
            <div className='navbarWrapper '>
                <div className="logoDiv">
                    <Link to="/" className='link logo'>
                        <SiBitcoin className='icon' />
                        <h1>BlogTr.</h1>
                    </Link>
                </div>
                <div className={`navBar ${isActive ? "activeNavbar" : " "}`}>
                    {/* <div className={`navBar  activeNavbar`}> */}
                    <ul className="navLists">
                        <li className="navItem">
                            <ActiveLink to={"/"} className="link navLink">Home</ActiveLink>
                        </li>
                        <li className="navItem">
                            <ActiveLink to={"/category/news"} className="link navLink">News</ActiveLink>
                        </li>
                        <li className="navItem">
                            <ActiveLink to={"/category/crypto"} className="link navLink">Crypto</ActiveLink>
                        </li>

                        <li className="navItem">
                            <ActiveLink to={"/contact"} className="link navLink">Contact</ActiveLink>
                        </li>

                        {user ? (<>
                            <li className="navItem">
                                <Link to={"/write"} className="link navLink">Write</Link>
                            </li>
                            <li className="navItem">
                                <Link to={"/settings"} className="link navLink">Settings</Link>
                            </li>
                            <li className="navItem" onClick={handleLogout}>
                                <Link to="#" className="link navLink">Log out</Link>
                            </li>
                        </>)
                            : (
                                <li className="navItem">
                                    <Link to={"/login"} className="link navLink loginBtn">Log In</Link>
                                </li>
                            )}


                    </ul>
                    <div className="closeNavbar" onClick={showNavbar}>
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>

                <div className="toggleNavbar" onClick={showNavbar}>
                    <RxHamburgerMenu className='icon' />
                </div>
            </div>

        </div>
    )
}
export default Navbar