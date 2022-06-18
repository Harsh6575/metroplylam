import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { HiMenu, HiX } from "react-icons/hi";
import './Sidebar.css';

import { IconContext } from 'react-icons';


export default function Sidebar() {

    let location = useLocation();

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{ color: 'inherit' }}>
            <div className="nav-bar">
                <div className="sidebaropen">
                    <HiMenu onClick={showSidebar} />
                </div>
                <span className="logo navLogo">
                     Metro Ply Lam
                </span>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-links'>
                        <li className="sidebarclose">
                            <Link to='#' className='menu-bars'>
                                <HiX onClick={showSidebar}/>
                            </Link>
                            <span className="logo navLogo">Metro Ply Lam</span>
                        </li>
                        <li className='nav-li' onClick={showSidebar}>
                            <Link to='/' className={`menu-links ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                        </li>
                        <li className='nav-li' onClick={showSidebar}>
                            <Link to='/Products' className={`menu-links ${location.pathname === "/Products" ? "active" : ""}`}>Products</Link>
                        </li>
                        <li className='nav-li' onClick={showSidebar}>
                            <Link to='/Contact' className={`menu-links ${location.pathname === "/Contact" ? "active" : ""}`}>Contact</Link>
                        </li>
                        <li className='nav-li' onClick={showSidebar}>
                            <Link to='/Sitemap' className={`menu-links ${location.pathname === "/Sitemap" ? "active" : ""}`}>Sitemap</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </IconContext.Provider >
    )
}
