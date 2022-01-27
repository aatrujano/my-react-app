import React from 'react';
import ReactLogo from '../images/logo192.png';

const NavBar = () => {
    return(
        <nav className='navBar'>
            <div className='navBar__logoContainer'>
                <img className='navBar__logoContainer-reactLogo' src={ReactLogo} alt="" />
                <p className='navBar__logoContainer-reactFacts'>ReactFacts</p>
            </div>
            <p className='navBar__text'>React Course - Project 1</p>
        </nav>
    )
};

export default NavBar;