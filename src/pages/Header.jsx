import React, { useState } from 'react'
import "./Header.css"
import logo from "../Image/logo.png"
import { Link } from 'react-router-dom'

function Header() {

    let [showmenu,setShowmenu]=useState('false');
    return (
        <>
            <div className="container headerouterdiv">
                <div className="row">
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <div className="mindiv">
                            <button className={`btn1 ${(showmenu)?'':'btn2'}`} onClick={()=>setShowmenu(!showmenu)}>&#9776;</button>
                            <button className={` ${(showmenu)?'':'btn1'}`} onClick={()=>setShowmenu(!showmenu)}>&times;</button>
                        </div>
                        <div className="headernav">
                            <ul className={`navbar-nav mr-auto ${(showmenu)?'':'active'}`}>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><Link to="/blogs">Blogs</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/about">About Us</Link></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><Link to="contact">Contact</Link></a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>

                <div className="logo">
                    <img src={logo} alt="Error" />
                </div>
            </div>
        </>
    )
}

export default Header