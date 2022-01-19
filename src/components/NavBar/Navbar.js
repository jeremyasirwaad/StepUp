import React from 'react'
import './NavBar.css'

export const Navbar = () => {
    return (
        <div className='navbarcontainer'>
        <div className="navlinkcontainer">
            <details>
            <summary></summary>
            <nav class="menu">
                <a href="#link">Home</a>
                <a href="#link">Why StartUps ?</a>
                <a href="#link">Where To Start ?</a>
                <a href="#link">Contact</a>
                <a href="#link">About</a>
            </nav>
            </details>
        </div>
        <div className="titlecon">
        <i class="fas fa-arrow-up"></i>
        <span className='title_nav'>Step Up</span>
        </div>
        </div>
    )
}
