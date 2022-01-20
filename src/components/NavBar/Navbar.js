import React from 'react'
import './NavBar.css'
import logo from './151517978_1629864483_IMG-20201010-WA0000.jpg'
import { Anchor } from 'antd';
const { Link } = Anchor;
export const Navbar = () => {
    return (
        <div className='navbarcontainer'>
        <div className="navlinkcontainer">
            <details>
            <summary></summary>
            <nav class="menu">
            <Anchor>
                    <Link className='linksfornav' href="#home" title="Home" />
            </Anchor>
            <Anchor targetOffset = '100'>
                <Link className='linksfornav' href="#startups" title="Why StartUps" />
            </Anchor>
            <Anchor>
                <Link className='linksfornav' href="#fullstack" title="Why FullStack" />
            </Anchor>
            <Anchor targetOffset = '100'>
                <Link className='linksfornav' href="#stepup" title="STEPUP Program" />  
            </Anchor>
            <Anchor>
                <Link className='linksfornav' href="#resources" title="Resources" />
            </Anchor>
            <Anchor>
                <Link className='linksfornav' href="#faq" title="FAQ" />
            </Anchor>
            </nav>
            </details>
        </div>
        <div className="titlecon">
            <div className='logoandtitle'>
                <img className='logoimg' src= { logo } alt="" />
                <span className='title_nav'>STEP UP</span>
            </div>
        </div>
        </div>
    )
}
