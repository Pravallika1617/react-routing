import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className='primary-navbar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {/* <NavLink to='book/1'>Book 1</NavLink>
                <NavLink to='book/2'>Book 2</NavLink>
                <NavLink to='book/3'>Book 3</NavLink> */}
                <NavLink to='/user'>User</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;
