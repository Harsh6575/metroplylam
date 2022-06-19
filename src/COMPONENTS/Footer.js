import './My.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div className='f-container'>
            <div>
                Quicklinks
                <div className='q-links'>
                    <Link href='/' className='q-l'>Home</Link>
                    <Link href='/Products' className='q-l'>Products</Link>
                    <Link href='/Contact' className='q-l'>Contact</Link>
                </div>
            </div>
            <div className='last-line'>
                This web site is made with <a className='f-links' href="https://reactjs.org/">React.</a>
            </div>
        </div>
    )
}