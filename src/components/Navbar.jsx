/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "../images/logo.svg"

const Navbar = () => {
    return <nav className='nav'>
        <figure className='nav__figure'>
            <img className='nav__logo' src={logo} alt="logo" />
        </figure>

        <a className='nav__try__free' href="">Try it free</a>
    </nav>
}

export default Navbar