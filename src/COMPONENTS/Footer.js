import './My.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='f-container'>
            <div className='last-line'>
                This web site is made with <a className='f-links' href="https://reactjs.org/">React.</a>
            </div>
        </div>
    )
}