import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';


const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <Button onClick={logout}>
                Log Out
            </Button>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">О постах</Link>
            </div>
        </div>
    )
}

export default Navbar;