import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <nav className='nav'>
            <div className='head'>
                <h2>TheMeal Db</h2>
            </div>
            <div className='link'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
            </div>
        </nav>

    );
};

export default Header;