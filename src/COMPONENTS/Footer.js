import './My.css'
import React from 'react';

export default function Footer() {
    return (
        <div className='f-container'>
            <div className='q-l'>
                Quicklinks
                <div className='q-links'>
                    <a href='/' className='q-l'>Home</a>
                    <a href='/Products' className='q-l'>Products</a>
                    <a href='/Contact' className='q-l'>Contact</a>
                </div>
            </div>
            <div className='last-line'>
                This web site is made with <a className='f-links' href="https://reactjs.org/">React.</a>
            </div>
        </div>
    )
}