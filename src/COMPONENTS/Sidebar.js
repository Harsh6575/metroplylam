import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { HiMenu, HiX } from "react-icons/hi";
import './Sidebar.css';

import { IconContext } from 'react-icons';



export default function Sidebar() {

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="nav-bar">
                <span className="logo navLogo">Metro Ply Lam</span>
                <div className="sidebaropen">
                    <HiMenu onClick={showSidebar} />
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-links' onClick={showSidebar}>
                        <li className="sidebarclose">
                            <span className="logo navLogo">Metro Ply Lam</span>
                            <Link to='#' className='menu-bars'>
                                <HiX />
                            </Link>
                        </li>
                        <li className='nav-li'>
                            <Link to='/' className={`menu-links ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                        </li>
                        <li className='nav-li'>
                            <Link to='/Products' className={`menu-links ${location.pathname === "/Products" ? "active" : ""}`}>Products</Link>
                        </li>
                        <li className='nav-li'>
                            <Link to='/Contact' className={`menu-links ${location.pathname === "/Contact" ? "active" : ""}`}>Contact</Link>
                        </li>
                        <li className='nav-li'>
                            <Link to='/Sitemap' className={`menu-links ${location.pathname === "/Sitemap" ? "active" : ""}`}>Sitemap</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </IconContext.Provider >
    )
}
