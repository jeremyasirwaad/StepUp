import React from 'react'
import './NavBar.css'
import logo from './151517978_1629864483_IMG-20201010-WA0000.jpg'
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
            <div className='logoandtitle'>
                <img className='logoimg' src= { logo } alt="" />
                <span className='title_nav'>Step Up</span>
            </div>
        </div>
        </div>
    )
}
