import React from 'react'
import '../Navbar/navbar.css'
import { FaUser } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { VscThreeBars } from 'react-icons/vsc'
import logo from '../../assets/MataJi.png'
export default function Navbar() {
    function toggle() {
        const hamburger = document.getElementById('ham');
        const menu = document.getElementById("menu");
        hamburger.addEventListener('click', () => {
            menu.style.display = 'block';
        })
    }
    function backtoNav() {
        const cross = document.getElementById('cross');
        const menu = document.getElementById("menu");
        cross.addEventListener('click', () => {
            menu.style.display = 'none';
        })
    }
    return (
        <nav className='nav-container'>
            <div className="navbar-active">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='right'>
                    <div className="links">
                        <a href="/" className="link">Home</a>
                        <a href="/blog" className="link">Blog</a>
                        <a href="/search" className="link">Search</a>
                        <a href="/recipe" className="link">Recipes</a>
                        <a href="/contact" className="link">Contact</a>
                    </div>
                    <div className="icons">
                        <a href="/login" className="icon-link">{<FaUser size={30} />}</a>

                        <button className="hamburger" id='ham' onClick={toggle}>
                            <VscThreeBars size={35} />
                        </button>

                    </div>
                </div>
            </div>
            <div className="menu hidden" id='menu'>
                <div className="top-bar">
                    <ImCross id='cross' onClick={backtoNav} size={30} />
                </div>
                <div className="fields">
                    <a href="/" className="link">Home</a>
                    <a href="/blog" className="link">Blog</a>
                    <a href="/search" className="link">Search</a>
                    <a href="/recipe" className="link">Recipes</a>
                    <a href="/contact" className="link">Contact</a>
                </div>
            </div>
        </nav>
    )
}
